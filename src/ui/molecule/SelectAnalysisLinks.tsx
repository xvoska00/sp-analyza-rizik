import {Menu, Transition} from "@headlessui/react";
import {ChevronUpDownIcon} from "@heroicons/react/24/solid";
import SelectAnalysisLink from "atom/SelectAnalysisLink";
import LinkButton from "atom/LinkButton";
import classNames from "classnames";
import React from "react";
import {IAnalysis, IRisk} from "types";

interface IProps {
    analysis: IAnalysis;
    analyses: IAnalysis[];
    risk?: IRisk;
}

const SelectAnalysisLinks = ({analysis, analyses, risk}: IProps) => {
    let validAnalyses = analyses.filter(filteredAnalysis => filteredAnalysis.id !== analysis.id);
    if (!!risk) {
        validAnalyses = validAnalyses.filter(
            filteredAnalysis => filteredAnalysis.risks.filter(filteredRisk => filteredRisk.id === risk.id).length
        );
    }

    return !validAnalyses.length ? (
        <LinkButton>{analysis.name}</LinkButton>
    ) : (
        <div className="relative z-10 inline-block text-left">
            <Menu>
                <Menu.Button
                    className={classNames(
                        "w-24 h-9 shrink-0 px-1.5 flex justify-between items-center rounded text-xs font-semibold border border-gray-200",
                        "sm:w-28 sm:h-10 sm:px-2.5",
                        "md:w-32 md:h-12 md:text-base",
                        "lg:w-36 lg:h-14 lg:text-lg",
                        "xl:w-40 xl:h-16 xl:text-xl",
                        "text-gray-500 bg-white hover:bg-gray-100 focus:bg-gray-100"
                    )}
                >
                    {analysis.name}
                    <ChevronUpDownIcon className="w-4 h-4 text-gray-500 shrink-0 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                </Menu.Button>

                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className={classNames(
                            "absolute w-24 bg-white border border-gray-200 rounded max-h-40 overflow-y-auto",
                            "sm:w-28 md:w-32 md:max-h-48 lg:w-36 lg:max-h-52 xl:w-40 xl:max-h-60"
                        )}
                    >
                        {validAnalyses.map(validAnalysis => (
                            <Menu.Item key={validAnalysis.id}>
                                {({active}) => (
                                    <SelectAnalysisLink
                                        active={active}
                                        href={`/${validAnalysis.id}${!!risk ? `/${risk.id}` : ""}`}
                                    >
                                        {validAnalysis.name}
                                    </SelectAnalysisLink>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default SelectAnalysisLinks;
