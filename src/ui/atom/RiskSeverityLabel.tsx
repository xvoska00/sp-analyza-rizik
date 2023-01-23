import classNames from "classnames";
import React from "react";
import {SeverityType} from "types";

interface IProps {
    children: SeverityType;
    threeTiers?: boolean;
}

const RiskSeverityLabel = ({children, threeTiers}: IProps) => {
    return (
        <div
            className={classNames(
                "w-14 h-5 flex justify-center items-center text-2xs text-white font-semibold rounded-full shrink-0",
                "md:w-16 md:h-7 md:text-xs",
                "lg:w-20 lg:h-8 lg:text-sm",
                "xl:w-24 xl:h-9 xl:text-sm",
                getRiskSeverityColor()
            )}
        >
            {children}
        </div>
    );

    function getRiskSeverityColor(): string {
        switch (children) {
            case SeverityType.CRITICAL:
                return "bg-red-600";
            case SeverityType.HIGH:
                return threeTiers ? "bg-red-600" : "bg-orange-400";
            case SeverityType.MEDIUM:
                return "bg-yellow-400";
            default:
                return "bg-green-600";
        }
    }
};

export default RiskSeverityLabel;
