export enum RiskSeverityType {
    LOW = "nízká",
    MEDIUM = "střední",
    HIGH = "vysoká",
    CRITICAL = "kritická"
}

export enum SheetNameType {
    POPINFO = "popInfo",
    AKTIVA = "aktiva",
    EXOP = "exOp"
}

export interface IDefaultData {
    id: string;
    name: string;
}

export interface IExcelData extends IDefaultData {
    description: string;
    intent: string;
    source: string;
    probability: number;
    impact: number;
    level: number;
    maxR: number;
    exOp: string;
    aktiva: string;
}

export interface IExcelExOpData extends IDefaultData {
    [analysis: string]: string;
}

export interface IExOp extends IDefaultData {
    coverage: string;
}

export interface IAnalysis extends IDefaultData {
    risks: IRisk[];
    stats: {
        severity: {
            [name in RiskSeverityType]: number;
        };
    };
}

export interface IPageNavigationLink {
    href: string;
    name: string;
}

export interface IPopoverInfo {
    impact: string;
    intent: string;
    level: string;
    probability: string;
    severity: string;
    source: string;
}

export interface IRisk extends IDefaultData {
    description: string;
    intent: string;
    source: string;
    probability: number;
    impact: number;
    level: number;
    maxR: number;
    exOp: IExOp[];
    aktiva: IDefaultData[];
    severity: RiskSeverityType;
}
