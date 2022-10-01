import Layout from "molecule/Layout";
import LinkButtons from "molecule/LinkButtons";
import PageTitle from "atom/PageTitle";
import type {GetStaticProps, NextPage} from "next";
import {IAnalysis} from "types";
import {getAnalysesFromExcel} from "utils/readExcel";

interface IProps {
    analyses: IAnalysis[];
}

const Home: NextPage<IProps> = ({analyses}) => {
    return (
        <Layout title="Přehled zpracovaných analýz rizik">
            <PageTitle className="text-lg font-bold my-5 md:text-xl lg:text-2xl xl:text-3xl">
                Přehled zpracovaných analýz rizik:
            </PageTitle>
            <LinkButtons analyses={analyses} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const analyses = getAnalysesFromExcel();
    return {props: {analyses}};
};

export default Home;
