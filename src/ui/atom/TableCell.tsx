import classNames from "classnames";
import React, {ReactNode} from "react";

interface IProps {
    children?: string | number | ReactNode;
    isFullWidth?: boolean;
}

const TableCell = ({children, isFullWidth}: IProps) => {
    return (
        <div
            className={classNames(
                "table-cell align-middle h-8 px-2.5 whitespace-nowrap border-b border-gray-200 first:border-l last:border-r",
                "sm:h-10 md:h-12 md:px-3 lg:h-14 xl:h-16",
                !!isFullWidth ? "max-w-1 w-full text-left truncate" : "text-center shrink-0"
            )}
        >
            <span className={classNames(!isFullWidth && "flex justify-center")}>{children}</span>
        </div>
    );
};

export default TableCell;
