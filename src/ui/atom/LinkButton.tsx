import classNames from "classnames";
import Link from "next/link";
import React from "react";

interface IProps {
    children: string;
    href?: string;
}

const LinkButton = ({children, href}: IProps) => {
    return !href ? (
        <div
            className={classNames(
                "w-24 h-9 shrink-0 flex justify-center items-center rounded text-sm font-semibold border border-gray-200",
                "sm:w-28 sm:h-10",
                "md:w-32 md:h-12 md:text-base",
                "lg:w-36 lg:h-14 lg:text-lg",
                "xl:w-40 xl:h-16 xl:text-xl",
                "text-gray-500 bg-transparent"
            )}
        >
            {children}
        </div>
    ) : (
        <Link href={href}>
            <a
                className={classNames(
                    "w-24 h-9 shrink-0 flex justify-center items-center rounded text-sm font-semibold border border-gray-200",
                    "sm:w-28 sm:h-10",
                    "md:w-32 md:h-12 md:text-base",
                    "lg:w-36 lg:h-14 lg:text-lg",
                    "xl:w-40 xl:h-16 xl:text-xl",
                    "text-gray-800 bg-white hover:bg-gray-100 focus:bg-gray-100"
                )}
            >
                {children}
            </a>
        </Link>
    );
};

export default LinkButton;
