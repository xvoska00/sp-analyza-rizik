export enum SeverityType {
    LOW = "nízká",
    MEDIUM = "střední",
    HIGH = "vysoká",
    CRITICAL = "kritická"
}

export enum SheetNameType {
    POPINFO = "popInfo",
    AKTIVA = "aktiva",
    EXOP = "exOp",
    NAVOP = "navOp"
}

export interface IAktivum extends IDefaultData {
    availability: number;
    category: string;
    confidentiality: number;
    description: string;
    integrity: number;
    significance: number;
    value: number;
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
    description: string;
    [analysis: string]: string;
}

export interface IExOp extends IDefaultData {
    coverage: string;
    description: string;
}

export interface IExcelNavOpData extends IDefaultData {
    description: string;
    goal: string;
    risks: string;
    priority: string;
    date: string;
    costs: string;
}

export interface INavOp extends IDefaultData {
    description: string;
    goal: string;
    risks: string[];
    priority: SeverityType;
    date: string;
    costs: string;
}

export interface IAnalysis extends IDefaultData {
    risks: IRisk[];
    stats: {
        severity: {
            [name in SeverityType]: number;
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
    navOp: INavOp[];
    aktiva: IAktivum[];
    severity: SeverityType;
}
