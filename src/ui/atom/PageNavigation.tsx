import {ChevronRightIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import {IPageNavigationLink} from "types";

interface IProps {
    links: IPageNavigationLink[];
}

const PageNavigation = ({links}: IProps) => {
    return (
        <div className="w-full py-5 flex text-base font-bold bg-gray-50 lg:text-lg xl:text-xl">
            {links.map((link, index) => (
                <span key={index} className="flex items-center ml-2 first:ml-0">
                    <ChevronRightIcon className="w-4 h-4 mr-2 text-gray-500" />
                    <Link href={link.href}>
                        <a className="hover:underline">{link.name}</a>
                    </Link>
                </span>
            ))}
        </div>
    );
};

export default PageNavigation;
