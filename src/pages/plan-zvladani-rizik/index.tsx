import Layout from "molecule/Layout";
import PageTitle from "atom/PageTitle";
import type {GetStaticProps, NextPage} from "next";
import {INavOp, SeverityType} from "types";
import {getNavOp} from "utils/readExcel";
import TableNavOp from "molecule/TableNavOp";
import {useMemo, useState} from "react";
import PageNavigation from "atom/PageNavigation";
import MyListbox from "atom/ListBox";
import {useRouter} from "next/router";

interface IProps {
    navOp: INavOp[];
}

export enum FilterOption {
    COSTS_ASC = "Náklady vzestupně",
    COSTS_DESC = "Náklady sestupně",
    DATE_ASC = "Datum vzestupně",
    DATE_DESC = "Datum sestupně",
    PRIORITY_ASC = "Priorita vzestupně",
    PRIORITY_DESC = "Priorita sestupně"
}

const NavrhovanaOpatreni: NextPage<IProps> = ({navOp}: IProps) => {
    const router = useRouter();
    const analysisId = router.query.analyza;
    const [filteredNavOp, setFilteredNavOp] = useState<INavOp[]>();
    const navOpWithPriorityNum = useMemo(
        () =>
            navOp.map(navOp => ({
                ...navOp,
                priorityNum: getValueForPriority(navOp.priority),
                dateTimestamp: getNavOpDate(navOp.date),
                unifiedCost: getUnifiedCost(navOp.costs)
            })),
        [navOp]
    );
    const options = [
        "--Vybrat filtr--",
        FilterOption.PRIORITY_ASC,
        FilterOption.PRIORITY_DESC,
        FilterOption.COSTS_ASC,
        FilterOption.COSTS_DESC,
        FilterOption.DATE_ASC,
        FilterOption.DATE_DESC
    ];
    const links = [
        {name: "Úvod", href: "/"},
        ...(analysisId
            ? [{name: `Přehled rizik ${(analysisId as string).split("-").join("/")}`, href: `/${analysisId}`}]
            : [])
    ];

    return (
        <Layout title="Plán zvládání rizik">
            <PageNavigation links={links} />
            <PageTitle className="text-lg font-bold mb-5 md:text-xl lg:text-2xl xl:text-3xl">
                Plán zvládání rizik:
            </PageTitle>
            <MyListbox className="ml-auto mr-3 mb-4 w-fit" options={options} filter={filterNavOp} />
            <TableNavOp navOp={filteredNavOp || navOpWithPriorityNum} />
        </Layout>
    );

    function filterNavOp(option?: FilterOption | string): void {
        const navOp = [...navOpWithPriorityNum];
        switch (option) {
            case FilterOption.COSTS_ASC:
                setFilteredNavOp(navOp.sort((navOp1, navOp2) => navOp1.unifiedCost - navOp2.unifiedCost));
                break;
            case FilterOption.COSTS_DESC:
                setFilteredNavOp(navOp.sort((navOp1, navOp2) => navOp2.unifiedCost - navOp1.unifiedCost));
                break;
            case FilterOption.DATE_ASC:
                setFilteredNavOp(navOp.sort((navOp1, navOp2) => navOp1.dateTimestamp - navOp2.dateTimestamp));
                break;
            case FilterOption.DATE_DESC:
                setFilteredNavOp(navOp.sort((navOp1, navOp2) => navOp2.dateTimestamp - navOp1.dateTimestamp));
                break;
            case FilterOption.PRIORITY_ASC:
                setFilteredNavOp(navOp.sort((navOp1, navOp2) => navOp1.priorityNum - navOp2.priorityNum));
                break;
            case FilterOption.PRIORITY_DESC:
                setFilteredNavOp(navOp.sort((navOp1, navOp2) => navOp2.priorityNum - navOp1.priorityNum));
                break;
            default:
                setFilteredNavOp(undefined);
                break;
        }
    }

    function getValueForPriority(priority: string): number {
        switch (priority) {
            case SeverityType.CRITICAL:
                return 3;
            case SeverityType.HIGH:
                return 2;
            case SeverityType.MEDIUM:
                return 1;
            default:
                return 0;
        }
    }

    function getNavOpDate(date: string): number {
        const dateParts = date.split("/").map(date => Number(date));

        return new Date(dateParts[1], dateParts[0] - 1).getTime();
    }

    function getUnifiedCost(costs: string): number {
        const costsParts = costs.split(" ");

        if (costsParts.includes("MD")) {
            return Number(costsParts[0]) * 7_000;
        }
        if (costsParts.includes("tis.")) {
            return Number(costsParts[0]) * 1_000;
        }
        if (costsParts.includes("mil.")) {
            return Number(costsParts[0]) * 1_000_000;
        }

        return Number(costsParts[0]);
    }
};

export const getStaticProps: GetStaticProps = async () => {
    const navOp = getNavOp();
    return {props: {navOp}};
};

export default NavrhovanaOpatreni;
