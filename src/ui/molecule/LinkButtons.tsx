import LinkButton from "atom/LinkButton";
import React from "react";
import {IAnalysis} from "types";

interface IProps {
    analyses: IAnalysis[];
}

const LinkButtons = ({analyses}: IProps) => {
    return (
        <div className="w-full flex justify-start flex-wrap gap-2.5 sm:gap-3.5 md:gap-5 lg:gap-7 xl:gap-10">
            {analyses.map(analysis => (
                <LinkButton key={analysis.id} href={`/${analysis.id}`}>
                    {analysis.name}
                </LinkButton>
            ))}
        </div>
    );
};

export default LinkButtons;
