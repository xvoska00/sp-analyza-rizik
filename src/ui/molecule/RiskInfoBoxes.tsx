import RiskInfoBox from "molecule/RiskInfoBox";
import React from "react";
import {IPopoverInfo, IRisk} from "types";

interface IProps {
    popInfo: IPopoverInfo;
    risk: IRisk;
}

const RiskInfoBoxes = ({popInfo, risk}: IProps) => {
    return (
        <div className="w-full flex justify-center flex-wrap gap-2.5 lg:gap-5">
            <div className="flex flex-col items-center gap-2.5 lg:gap-5">
                <div className="flex gap-2.5 lg:gap-5">
                    <RiskInfoBox content={risk.probability} info={popInfo.probability} title="Pravděpodobnost hrozby" />
                    <RiskInfoBox content={risk.impact} info={popInfo.impact} title="Dopad hrozby" />
                </div>
                <RiskInfoBox content={risk.level} info={popInfo.level} title="Úroveň hrozby" />
            </div>
            <div className="flex gap-2.5 lg:gap-5">
                <RiskInfoBox content={risk.intent} info={popInfo.intent} title="Úmysl" />
                <RiskInfoBox content={risk.source} info={popInfo.source} title="Zdroj" />
            </div>
        </div>
    );
};

export default RiskInfoBoxes;
