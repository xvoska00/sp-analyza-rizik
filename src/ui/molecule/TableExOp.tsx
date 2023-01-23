import {InformationCircleIcon} from "@heroicons/react/24/outline";
import ExOpCoverageLabel from "atom/ExOpCoverageLabel";
import FormattedPopupInfoExOp from "atom/FormattedPopupInfoExOp";
import Table from "atom/Table";
import TableCell from "atom/TableCell";
import TableHeader from "atom/TableHeader";
import TableRowWithPopup from "atom/TableRowWithPopup";
import React from "react";
import {IExOp} from "types";

interface IProps {
    exOp: IExOp[];
}

const TableExOp = ({exOp}: IProps) => {
    return (
        <Table
            head={
                <TableHeader>
                    <TableCell isFullWidth={true}>Existující opatření</TableCell>
                    <TableCell>Splněno [%]</TableCell>
                    <TableCell></TableCell>
                </TableHeader>
            }
            body={exOp.map(exOp => (
                <TableRowWithPopup key={exOp.id} popupInfo={<FormattedPopupInfoExOp exOp={exOp} />}>
                    <TableCell isFullWidth={true}>{exOp.name}</TableCell>
                    <TableCell>
                        <ExOpCoverageLabel>{exOp.coverage}</ExOpCoverageLabel>
                    </TableCell>
                    <TableCell>
                        <InformationCircleIcon className="w-4 h-4 shrink-0 text-gray-300 group-hover:text-gray-500 group-focus:text-gray-500 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                    </TableCell>
                </TableRowWithPopup>
            ))}
        />
    );
};

export default TableExOp;
