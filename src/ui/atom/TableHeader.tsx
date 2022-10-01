import classNames from "classnames";
import React, {ReactNode} from "react";

interface IProps {
    children: ReactNode | ReactNode[];
}

const TableHeader = ({children}: IProps) => {
    return (
        <div
            className={classNames(
                "table-row font-bold text-sm bg-white text-gray-800 sticky top-0",
                "sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            )}
        >
            {children}
        </div>
    );
};

export default TableHeader;
