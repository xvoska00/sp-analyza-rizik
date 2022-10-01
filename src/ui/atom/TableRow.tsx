import classNames from "classnames";
import Link from "next/link";
import React, {ReactNode} from "react";

interface IProps {
    children: ReactNode | ReactNode[];
    href?: string;
}

const TableRow = ({children, href}: IProps) => {
    return href ? (
        <Link href={href}>
            <a
                className={classNames(
                    "table-row text-xs bg-white text-gray-800 border border-gray-200 cursor-pointer hover:bg-gray-100 focus:bg-gray-100",
                    "sm:text-sm md:text-base lg:text-lg xl:text-xl"
                )}
            >
                {children}
            </a>
        </Link>
    ) : (
        <div
            className={classNames(
                "table-row text-xs bg-white text-gray-800 border border-gray-200",
                "sm:text-sm md:text-base lg:text-lg xl:text-xl"
            )}
        >
            {children}
        </div>
    );
};

export default TableRow;
