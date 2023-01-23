import classNames from "classnames";
import React from "react";
import {INavOp} from "types";

interface IProps {
    navOp: INavOp;
}

const FormattedPopupInfoNavOp = ({navOp}: IProps) => {
    return (
        <div className="flex flex-col divide-y divide-gray-200">
            <div className="pb-1 font-bold text-sm sm:text-base lg:text-lg w-64 sm:w-80 lg:w-96">{navOp.name}</div>
            <div
                className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm w-64 sm:w-80 lg:w-96")}
            >
                <b>Popis:</b>
                {navOp.description.split("\n").map((item, index) => (
                    <p>{item}</p>
                ))}
            </div>
            <div
                className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm w-64 sm:w-80 lg:w-96")}
            >
                <b>Cíl:</b>
                {navOp.goal
                    .split("\n")
                    .filter(item => item !== "\r")
                    .map(item => (
                        <p>- {item}</p>
                    ))}
            </div>
        </div>
    );
};

export default FormattedPopupInfoNavOp;
