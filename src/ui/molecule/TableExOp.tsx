import ExOpCoverageLabel from "atom/ExOpCoverageLabel";
import Table from "atom/Table";
import TableCell from "atom/TableCell";
import TableHeader from "atom/TableHeader";
import TableRow from "atom/TableRow";
import React from "react";
import {IRisk} from "types";

interface IProps {
    risk: IRisk;
}

const TableExOp = ({risk}: IProps) => {
    return (
        <Table
            head={
                <TableHeader>
                    <TableCell isFullWidth={true}>Existující opatření</TableCell>
                    <TableCell>Splněno [%]</TableCell>
                </TableHeader>
            }
            body={risk.exOp.map(exOp => (
                <TableRow key={exOp.id}>
                    <TableCell isFullWidth={true}>{exOp.name}</TableCell>
                    <TableCell>
                        <ExOpCoverageLabel>{exOp.coverage}</ExOpCoverageLabel>
                    </TableCell>
                </TableRow>
            ))}
        />
    );
};

export default TableExOp;
