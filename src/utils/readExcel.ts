import * as XLSX from "xlsx";
import {
    IExcelData,
    IAnalysis,
    IRisk,
    SheetNameType,
    IExcelExOpData,
    IExOp,
    SeverityType,
    IPopoverInfo,
    IAktivum,
    IExcelNavOpData,
    INavOp
} from "types";

export function getAnalysesFromExcel(): IAnalysis[] {
    const file = XLSX.readFile("./template.xlsx");
    const sheetNames = file.SheetNames.filter(
        (name: string) =>
            name !== SheetNameType.AKTIVA &&
            name !== SheetNameType.EXOP &&
            name !== SheetNameType.POPINFO &&
            name !== SheetNameType.NAVOP
    );
    const aktiva: IAktivum[] = XLSX.utils.sheet_to_json(file.Sheets[SheetNameType.AKTIVA]);
    const exOp: IExcelExOpData[] = XLSX.utils.sheet_to_json(file.Sheets[SheetNameType.EXOP]);
    const navOp: INavOp[] = getNavOp();
    const analyses: IAnalysis[] = [];

    for (const sheetName of sheetNames) {
        const sheetData: IExcelData[] = XLSX.utils.sheet_to_json(file.Sheets[sheetName]);
        const risks: IRisk[] = sheetData
            .map((item: IExcelData) => ({
                ...item,
                maxR: Math.round(item.maxR * 100) / 100,
                aktiva: getAktiva(item.aktiva),
                exOp: getExOp(item.exOp, sheetName),
                severity: getRiskSeverity(item.maxR),
                navOp: navOp.filter(measure => measure.risks.includes(item.id))
            }))
            .sort((itemA, itemB) => itemB.maxR - itemA.maxR);

        analyses.push({
            risks: risks,
            id: sheetName,
            name: sheetName.split("-").join("/"),
            stats: {
                severity: {
                    [SeverityType.CRITICAL]: risks.filter(risk => risk.severity === SeverityType.CRITICAL)
                        .length,
                    [SeverityType.HIGH]: risks.filter(risk => risk.severity === SeverityType.HIGH).length,
                    [SeverityType.MEDIUM]: risks.filter(risk => risk.severity === SeverityType.MEDIUM).length,
                    [SeverityType.LOW]: risks.filter(risk => risk.severity === SeverityType.LOW).length
                }
            }
        });
    }

    analyses.sort((analysisA: IAnalysis, analysisB: IAnalysis) => {
        const analysisATimestamp = getAnalysisDates(analysisA);
        const analysisBTimestamp = getAnalysisDates(analysisB);

        return analysisBTimestamp - analysisATimestamp;
    });

    return analyses;

    function getAktiva(aktivaString: string): IAktivum[] {
        if (!aktivaString) return [];
        if (!aktivaString.toString().includes(",")) return aktiva.filter(aktivum => aktivum.id === aktivaString);
        return aktiva
            .filter(aktivum => aktivaString.toString().split(",").includes(aktivum.id.toString()))
            .map(aktivum => ({...aktivum, value: Math.round(aktivum.value)}));
    }

    function getExOp(exOpString: string, sheetName: string): IExOp[] {
        if (!exOpString) return [];
        if (!exOpString.toString().includes(","))
            return exOp
                .filter(measure => measure.id === exOpString)
                .map(measure => ({
                    id: measure.id,
                    name: measure.name,
                    coverage: measure[sheetName],
                    description: measure.description
                }));
        return exOp
            .filter(measure => exOpString.split(",").includes(measure.id))
            .map(measure => ({
                id: measure.id,
                name: measure.name,
                coverage: measure[sheetName],
                description: measure.description
            }));
    }

    function getAnalysisDates(analysis: IAnalysis): number {
        const analysisNameParts = analysis.name.split("/").map(analysisNamePart => Number(analysisNamePart));

        return new Date(analysisNameParts[2], analysisNameParts[1] - 1, analysisNameParts[0]).getTime();
    }

    function getRiskSeverity(maxR: number): SeverityType {
        switch (true) {
            case maxR >= 375:
                return SeverityType.CRITICAL;
            case maxR >= 70:
                return SeverityType.HIGH;
            case maxR >= 15:
                return SeverityType.MEDIUM;
            default:
                return SeverityType.LOW;
        }
    }
}

export function getPopoverInfo(): IPopoverInfo {
    const file = XLSX.readFile("./template.xlsx");
    const popoverInfos: IPopoverInfo[] = XLSX.utils.sheet_to_json(file.Sheets[SheetNameType.POPINFO]);

    return popoverInfos[0];
}

export function getNavOp(): INavOp[] {
    const file = XLSX.readFile("./template.xlsx");
    const navOpData: IExcelNavOpData[] = XLSX.utils.sheet_to_json(file.Sheets[SheetNameType.NAVOP]);

    return navOpData.map(navOp => ({
        ...navOp,
        risks: navOp.risks.split(","),
        priority: getNavOpPriority(navOp.priority)
    }));
}

function getNavOpPriority(priority: string): SeverityType {
    switch (priority) {
        case SeverityType.CRITICAL:
            return SeverityType.CRITICAL;
        case SeverityType.HIGH:
            return SeverityType.HIGH;
        case SeverityType.MEDIUM:
            return SeverityType.MEDIUM;
        default:
            return SeverityType.LOW;
    }
}
