import Table from "atom/Table";
import TableCell from "atom/TableCell";
import TableHeader from "atom/TableHeader";
import TableRow from "atom/TableRow";
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
                <TableRow key={aktivum.id}>
                    <TableCell isFullWidth={true}>{aktivum.name}</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            ))}
        />
    );
};

export default TableAktiva;
