import classNames from "classnames";
import React, {ReactNode} from "react";

interface IProps {
    children?: string | number | ReactNode;
    isFullWidth?: boolean;
    isHeader?: boolean;
}

const TableCell = ({children, isFullWidth, isHeader}: IProps) => {
    return (
        <div
            className={classNames(
                "table-cell align-middle h-8 px-2.5 border-b border-gray-200 first:border-l last:border-r",
                "sm:h-10 md:h-12 md:px-3 lg:h-14 xl:h-16",
                isHeader
                    ? "max-w-1 w-full break-words"
                    : isFullWidth
                    ? "max-w-1 w-full text-left truncate"
                    : "whitespace-nowrap text-center shrink-0"
            )}
        >
            <span className={classNames(!isFullWidth && "flex justify-center")}>{children}</span>
        </div>
    );
};

export default TableCell;
