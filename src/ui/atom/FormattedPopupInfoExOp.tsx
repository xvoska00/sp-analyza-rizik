import classNames from "classnames";
import React from "react";
import {IExOp} from "types";

interface IProps {
    exOp: IExOp;
}

const FormattedPopupInfoExOp = ({exOp}: IProps) => {
    return (
        <div className="flex flex-col divide-y divide-gray-200">
            <div className="pb-1 font-bold text-sm sm:text-base lg:text-lg">{exOp.name}</div>
            <div
                className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm w-64 sm:w-80 lg:w-96")}
            >
                <b>Popis:</b>{" "}
                {exOp.description.split("\n").map(item => (
                    <p>{item}</p>
                ))}
            </div>
            <div
                className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm w-64 sm:w-80 lg:w-96")}
            >
                <b>Splněno:</b> {exOp.coverage} %
            </div>
        </div>
    );
};

export default FormattedPopupInfoExOp;
