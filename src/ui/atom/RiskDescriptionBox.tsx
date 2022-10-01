import classNames from "classnames";
import React, {ReactNode} from "react";

interface IProps {
    children: ReactNode;
    label: string;
}

const RiskDescriptionBox = ({children, label}: IProps) => {
    return (
        <div
            className={classNames(
                "relative w-24 h-9 shrink-0 flex justify-center items-center rounded text-sm font-semibold",
                "border border-gray-200 text-gray-500 bg-gray-50",
                "sm:w-28 sm:h-10",
                "md:w-32 md:h-12 md:text-base",
                "lg:w-36 lg:h-14 lg:text-lg",
                "xl:w-40 xl:h-16 xl:text-xl"
            )}
            data-label={label}
        >
            {children}
            <div
                className={classNames(
                    "absolute top-0 left-2 -translate-y-3/4 px-1 text-2xs font-semibold text-gray-500 bg-gray-50 leading-none",
                    "sm:text-xs sm:left-2.5",
                    "lg:text-sm"
                )}
            >
                {label}
            </div>
        </div>
    );
};

export default RiskDescriptionBox;
