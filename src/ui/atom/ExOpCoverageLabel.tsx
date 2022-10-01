import classNames from "classnames";
import React from "react";

interface IProps {
    children: string;
}

const ExOpCoverageLabel = ({children}: IProps) => {
    return (
        <div
            className={classNames(
                "w-5 h-5 rounded-full flex justify-center items-center text-2xs text-white font-semibold",
                "sm:w-7 sm:h-7 sm:text-xs",
                "lg:w-9 lg:h-9 lg:text-sm",
                getExOpCoverageColor()
            )}
        >
            {children}
        </div>
    );

    function getExOpCoverageColor(): string {
        const coverageNumber = Number(children);

        if (coverageNumber > 80) return "bg-green-600";
        if (coverageNumber > 60) return "bg-yellow-400";
        if (coverageNumber > 40) return "bg-orange-400";
        return "bg-red-600";
    }
};

export default ExOpCoverageLabel;
