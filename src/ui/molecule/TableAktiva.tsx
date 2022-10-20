import {InformationCircleIcon} from "@heroicons/react/24/outline";
import FormattedPopupInfoAktivum from "atom/FormattedPopupInfoAktivum";
import Table from "atom/Table";
import TableCell from "atom/TableCell";
import TableHeader from "atom/TableHeader";
import TableRow from "atom/TableRow";
import TableRowWithPopup from "atom/TableRowWithPopup";
import React from "react";
import {IRisk} from "types";

interface IProps {
    risk: IRisk;
}

const TableAktiva = ({risk}: IProps) => {
    return (
        <Table
            head={
                <TableHeader>
                    <TableCell isFullWidth={true}>Dotčená aktiva</TableCell>
                    <TableCell></TableCell>
                </TableHeader>
            }
            body={risk.aktiva.map(aktivum => (
                <TableRowWithPopup key={aktivum.id} popupInfo={<FormattedPopupInfoAktivum aktivum={aktivum} />}>
                    <TableCell isFullWidth={true}>{aktivum.name}</TableCell>
                    <TableCell>
                        <InformationCircleIcon className="w-4 h-4 shrink-0 text-gray-300 group-hover:text-gray-500 group-focus:text-gray-500 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                    </TableCell>
                </TableRowWithPopup>
            ))}
        />
    );
};

export default TableAktiva;
