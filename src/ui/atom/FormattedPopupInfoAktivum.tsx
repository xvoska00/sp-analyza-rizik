import classNames from "classnames";
import React from "react";
import {IAktivum} from "types";

interface IProps {
    aktivum: IAktivum;
}

const FormattedPopupInfoAktivum = ({aktivum}: IProps) => {
    return (
        <div className="flex flex-col divide-y divide-gray-200 w-64 sm:w-80 lg:w-96">
            <div className="pb-1 font-bold text-sm sm:text-base lg:text-lg w-64 sm:w-80 lg:w-96">{aktivum.name}</div>
            <div className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm")}>
                <b>Popis:</b> {aktivum.description}
            </div>
            <div className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm")}>
                <b>Kategorie:</b> {aktivum.category}
            </div>
            <div className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm")}>
                <b>Důvěrnost:</b> {aktivum.confidentiality}
            </div>
            <div className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm")}>
                <b>Dostupnost:</b> {aktivum.availability}
            </div>
            <div className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm")}>
                <b>Integrita:</b> {aktivum.integrity}
            </div>
            <div className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm")}>
                <b>Významnost:</b> {aktivum.significance}
            </div>
            <div className={classNames("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm")}>
                <b>Hodnota:</b> {aktivum.value}
            </div>
        </div>
    );
};

export default FormattedPopupInfoAktivum;
