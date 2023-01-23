import {ArrowUpRightIcon} from "@heroicons/react/24/solid";
import {IAnalysis, SeverityType} from "types";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import React, {useEffect, useMemo, useState} from "react";
import {getAnalysesFromExcel} from "utils/readExcel";
import Layout from "molecule/Layout";
import PageTitle from "atom/PageTitle";
import PageNavigation from "atom/PageNavigation";
import TableRisks from "molecule/TableRisks";
import classNames from "classnames";
import PieChart from "atom/PieChart";
import SelectAnalysisLinks from "molecule/SelectAnalysisLinks";
import Link from "next/link";

interface IProps {
    analyses: IAnalysis[];
    analysis: IAnalysis;
}

const AnalysisIdDetail: NextPage<IProps> = ({analysis, analyses}: IProps) => {
    const [analysisWithFilteredRisks, setAnalysisWithFilteredRisks] = useState<IAnalysis>();
    const data = useMemo(
        () => [
            analysis.stats.severity[SeverityType.CRITICAL],
            analysis.stats.severity[SeverityType.HIGH],
            analysis.stats.severity[SeverityType.MEDIUM],
            analysis.stats.severity[SeverityType.LOW]
        ],
        [analysis]
    );
    const labels = useMemo(
        () => [SeverityType.CRITICAL, SeverityType.HIGH, SeverityType.MEDIUM, SeverityType.LOW],
        [analysis]
    );
    const links = [{name: "Úvod", href: "/"}];

    useEffect(
        () => () => {
            setAnalysisWithFilteredRisks(undefined);
        },
        [analysis]
    );

    return (
        <Layout title={`Přehled rizik | ${analysis.name}`}>
            <PageNavigation links={links} />
            <PageTitle
                className={classNames(
                    "text-lg font-bold mb-5",
                    "md:text-xl md:mb-6",
                    "lg:text-2xl lg:mb-8",
                    "xl:text-3xl xl:mb-10"
                )}
            >
                Přehled rizik:
                <SelectAnalysisLinks analyses={analyses} analysis={analysis} />
            </PageTitle>
            <PieChart labels={labels} data={data} onCallback={onPieChartSelect} />
            <div className="ml-3 my-5">
                <Link href={{pathname: "/plan-zvladani-rizik", query: {analyza: analysis.id}}}>
                    <a className="w-fit flex items-baseline text-xs text-gray-800 cursor-pointer hover:underline sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        <span>Plán zvládání rizik</span>
                        <ArrowUpRightIcon className="w-4 h-4 ml-1 text-gray-800" />
                    </a>
                </Link>
            </div>
            <TableRisks analysis={analysisWithFilteredRisks || analysis} />
        </Layout>
    );

    function onPieChartSelect(severity?: string): void {
        if (severity) {
            setAnalysisWithFilteredRisks({
                ...analysis,
                risks: analysis.risks.filter(risk => risk.severity === severity)
            });
        } else {
            setAnalysisWithFilteredRisks(undefined);
        }
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    const analyses = getAnalysesFromExcel();
    const paths = analyses.map((analysis: IAnalysis) => ({params: {analysisId: analysis.id}}));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async context => {
    const analysisId = context.params?.analysisId;
    const analyses = getAnalysesFromExcel();
    const analysis = analyses.find((analysis: IAnalysis) => analysis.id === analysisId);
    return {
        props: {analysis, analyses}
    };
};

export default AnalysisIdDetail;
