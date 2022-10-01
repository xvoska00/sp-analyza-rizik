import {IAnalysis, IPopoverInfo, IRisk} from "types";
import _ from "lodash";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import React from "react";
import {getAnalysesFromExcel, getPopoverInfo} from "utils/readExcel";
import Layout from "molecule/Layout";
import PageTitle from "atom/PageTitle";
import PageNavigation from "atom/PageNavigation";
import RiskDescriptionBox from "atom/RiskDescriptionBox";
import RiskSeverityLabel from "atom/RiskSeverityLabel";
import RiskInfoBoxes from "molecule/RiskInfoBoxes";
import RiskDescriptionBoxWithPopup from "molecule/RiskDescriptionBoxWithPopup";
import SelectAnalysisLinks from "molecule/SelectAnalysisLinks";
import TableAktiva from "molecule/TableAktiva";
import TableExOp from "molecule/TableExOp";

interface IProps {
    analysis: IAnalysis;
    analyses: IAnalysis[];
    popInfo: IPopoverInfo;
    risk: IRisk;
}

const RiskIdDetail: NextPage<IProps> = ({analysis, analyses, popInfo, risk}) => {
    const links = [
        {name: "Úvod", href: "/"},
        {name: `Přehled rizik ${analysis.name}`, href: `/${analysis.id}`}
    ];
    return (
        <Layout title={`Riziko | ${risk.name}`}>
            <PageNavigation links={links} />
            <PageTitle wrap={true} className="text-lg font-bold mb-2.5 md:text-xl lg:text-2xl xl:text-3xl">
                {risk.name}
                <SelectAnalysisLinks analyses={analyses} analysis={analysis} risk={risk} />
            </PageTitle>
            <PageTitle wrap={true} className="text-sm mb-5 md:text-base lg:text-lg xl:text-xl">
                {risk.description}
                <div className="flex flex-row gap-4 md:flex-col md:mt-2">
                    <RiskDescriptionBox label={"Hodnota"}>
                        <span>{risk.maxR}</span>
                    </RiskDescriptionBox>
                    <RiskDescriptionBoxWithPopup label={"Závažnost"} info={popInfo.severity} value={risk.severity}>
                        <RiskSeverityLabel>{risk.severity}</RiskSeverityLabel>
                    </RiskDescriptionBoxWithPopup>
                </div>
            </PageTitle>
            <RiskInfoBoxes risk={risk} popInfo={popInfo} />
            <div className="mt-5 grid grid-cols-1 grid-flow-row auto-rows-min gap-2.5 md:grid-cols-2 md:gap-5">
                {!!risk.exOp.length && (
                    <div>
                        <TableExOp risk={risk} />
                    </div>
                )}
                {!!risk.aktiva.length && (
                    <div>
                        <TableAktiva risk={risk} />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const analyses = getAnalysesFromExcel();
    const paths = _.flattenDeep(
        analyses.map((analysis: IAnalysis) =>
            analysis.risks.map((risk: IRisk) => ({params: {analysisId: analysis.id, riskId: risk.id}}))
        )
    );

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async context => {
    if (context.params) {
        const {analysisId, riskId} = context.params;
        const popInfo = getPopoverInfo();
        const analyses = getAnalysesFromExcel();
        const analysis = analyses.find((analysis: IAnalysis) => analysis.id === analysisId);
        const risk = analysis?.risks.find((risk: IRisk) => risk.id === riskId);

        return {
            props: {analysisId, risk, popInfo, analysis, analyses}
        };
    }

    return {
        props: {risk: {}, popInfo: {}, analysis: {}, analyses: []}
    };
};

export default RiskIdDetail;
