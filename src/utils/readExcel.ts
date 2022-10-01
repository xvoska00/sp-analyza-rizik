import * as XLSX from "xlsx";
import {
    IExcelData,
    IAnalysis,
    IRisk,
    IDefaultData,
    SheetNameType,
    IExcelExOpData,
    IExOp,
    RiskSeverityType,
    IPopoverInfo
} from "types";

export function getAnalysesFromExcel(): IAnalysis[] {
    const file = XLSX.readFile("./template.xlsx");
    const sheetNames = file.SheetNames.filter(
        name => name !== SheetNameType.AKTIVA && name !== SheetNameType.EXOP && name !== SheetNameType.POPINFO
    );
    const aktiva: IDefaultData[] = XLSX.utils.sheet_to_json(file.Sheets[SheetNameType.AKTIVA]);
    const exOp: IExcelExOpData[] = XLSX.utils.sheet_to_json(file.Sheets[SheetNameType.EXOP]);
    const analyses: IAnalysis[] = [];

    for (const sheetName of sheetNames) {
        const sheetData: IExcelData[] = XLSX.utils.sheet_to_json(file.Sheets[sheetName]);
        const expandedSheetData: IRisk[] = sheetData
            .map((item: IExcelData) => ({
                ...item,
                maxR: Math.round(item.maxR * 100) / 100,
                aktiva: getAktiva(item.aktiva),
                exOp: getExOp(item.exOp, sheetName),
                severity: getRiskSeverity(item.maxR)
            }))
            .sort((itemA, itemB) => itemB.maxR - itemA.maxR);

        analyses.push({
            risks: expandedSheetData,
            id: sheetName,
            name: sheetName.split("-").join("/"),
            stats: {
                severity: {
                    [RiskSeverityType.CRITICAL]: expandedSheetData.filter(
                        risk => risk.severity === RiskSeverityType.CRITICAL
                    ).length,
                    [RiskSeverityType.HIGH]: expandedSheetData.filter(risk => risk.severity === RiskSeverityType.HIGH)
                        .length,
                    [RiskSeverityType.MEDIUM]: expandedSheetData.filter(
                        risk => risk.severity === RiskSeverityType.MEDIUM
                    ).length,
                    [RiskSeverityType.LOW]: expandedSheetData.filter(risk => risk.severity === RiskSeverityType.LOW)
                        .length
                }
            }
        });
    }

    analyses.sort((analysisA: IAnalysis, analysisB: IAnalysis) => {
        const analysisADates = getAnalysisDates(analysisA);
        const analysisBDates = getAnalysisDates(analysisB);

        return (
            (analysisBDates.year - analysisADates.year &&
                analysisBDates.month - analysisADates.month &&
                analysisBDates.day - analysisADates.day) ||
            analysisBDates.year - analysisADates.year ||
            analysisBDates.month - analysisADates.month ||
            analysisBDates.day - analysisADates.day
        );
    });

    return analyses;

    function getAktiva(aktivaString: string): IDefaultData[] {
        if (!aktivaString) return [];
        if (!aktivaString.toString().includes(",")) return aktiva.filter(aktivum => aktivum.id === aktivaString);
        return aktiva.filter(aktivum => aktivaString.toString().split(",").includes(aktivum.id.toString()));
    }

    function getExOp(exOpString: string, sheetName: string): IExOp[] {
        if (!exOpString) return [];
        if (!exOpString.toString().includes(","))
            return exOp
                .filter(measure => measure.id === exOpString)
                .map(measure => ({id: measure.id, name: measure.name, coverage: measure[sheetName]}));
        return exOp
            .filter(measure => exOpString.split(",").includes(measure.id))
            .map(measure => ({id: measure.id, name: measure.name, coverage: measure[sheetName]}));
    }

    function getAnalysisDates(analysis: IAnalysis): {day: number; month: number; year: number} {
        const analysisNameParts = analysis.name.split("/").map((analysisNamePart: string) => Number(analysisNamePart));
        return {
            day: analysisNameParts[0],
            month: analysisNameParts[1],
            year: analysisNameParts[2]
        };
    }

    function getRiskSeverity(maxR: number): RiskSeverityType {
        switch (true) {
            case maxR >= 13:
                return RiskSeverityType.CRITICAL;
            case maxR >= 8:
                return RiskSeverityType.HIGH;
            case maxR >= 4:
                return RiskSeverityType.MEDIUM;
            default:
                return RiskSeverityType.LOW;
        }
    }
}

export function getPopoverInfo(): IPopoverInfo {
    const file = XLSX.readFile("./template.xlsx");
    const popoverInfos: IPopoverInfo[] = XLSX.utils.sheet_to_json(file.Sheets[SheetNameType.POPINFO]);

    return popoverInfos[0];
}
