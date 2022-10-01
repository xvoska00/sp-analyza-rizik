import classNames from "classnames";
import React from "react";

interface IProps {
    info: string;
    title: string;
    value: string;
}

const FormattedPopupInfo = ({info, title, value}: IProps) => {
    const infoParts = info.split("|").map(infoPart => infoPart.trim());
    return (
        <div className="flex flex-col divide-y divide-gray-200">
            <div className="pb-1 font-bold text-sm sm:text-base lg:text-lg">{title}:</div>
            {infoParts.map((infoPart, index) => {
                const infoPartIdentificator: string[] = infoPart.split("-");
                return (
                    <div
                        key={index}
                        className={classNames(
                            "py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm",
                            value.includes(infoPartIdentificator[0].trim()) && "font-bold",
                            infoPart.length <= 60 ? "whitespace-nowrap" : "w-64 sm:w-80 lg:w-96"
                        )}
                    >
                        {infoPart}
                    </div>
                );
            })}
        </div>
    );
};

export default FormattedPopupInfo;
