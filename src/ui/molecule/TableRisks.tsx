import RiskSeverityLabel from "atom/RiskSeverityLabel";
import Table from "atom/Table";
import TableCell from "atom/TableCell";
import TableHeader from "atom/TableHeader";
import TableRow from "atom/TableRow";
import React, {useEffect} from "react";
import {IAnalysis} from "types";

interface IProps {
    analysis: IAnalysis;
}

const TableRisks = ({analysis}: IProps) => {
    return (
        <Table
            head={
                <TableHeader>
                    <TableCell isFullWidth={true}>Rizika</TableCell>
                    <TableCell>Hodnota</TableCell>
                    <TableCell>Závažnost</TableCell>
                </TableHeader>
            }
            body={analysis.risks.map(risk => (
                <TableRow key={`risk-table-row-${risk.id}`} href={`/${analysis.id}/${risk.id}`}>
                    <TableCell isFullWidth={true}>{risk.name}</TableCell>
                    <TableCell>{risk.maxR}</TableCell>
                    <TableCell>
                        <RiskSeverityLabel>{risk.severity}</RiskSeverityLabel>
                    </TableCell>
                </TableRow>
            ))}
        />
    );
};

export default TableRisks;
