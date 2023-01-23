import {InformationCircleIcon} from "@heroicons/react/24/outline";
import FormattedPopupInfoNavOp from "atom/FormattedPopupInfoNavOp";
import RiskSeverityLabel from "atom/RiskSeverityLabel";
import Table from "atom/Table";
import TableCell from "atom/TableCell";
import TableHeader from "atom/TableHeader";
import TableRowWithPopup from "atom/TableRowWithPopup";
import React from "react";
import {INavOp} from "types";

interface IProps {
    navOp: INavOp[];
}

const TableNavOp = ({navOp}: IProps) => {
    return (
        <Table
            head={
                <TableHeader>
                    <TableCell isFullWidth={true} isHeader={true}>
                        Navrhovaná opatření
                    </TableCell>
                    <TableCell>Priorita</TableCell>
                    <TableCell>Náklady</TableCell>
                    <TableCell>Datum</TableCell>
                    <TableCell></TableCell>
                </TableHeader>
            }
            body={navOp.map(navOp => (
                <TableRowWithPopup key={navOp.id} popupInfo={<FormattedPopupInfoNavOp navOp={navOp} />}>
                    <TableCell isFullWidth={true}>{navOp.name}</TableCell>
                    <TableCell>
                        <RiskSeverityLabel threeTiers={true}>{navOp.priority}</RiskSeverityLabel>
                    </TableCell>
                    <TableCell>{navOp.costs}</TableCell>
                    <TableCell>{navOp.date}</TableCell>
                    <TableCell>
                        <InformationCircleIcon className="w-4 h-4 shrink-0 text-gray-300 group-hover:text-gray-500 group-focus:text-gray-500 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                    </TableCell>
                </TableRowWithPopup>
            ))}
        />
    );
};

export default TableNavOp;
