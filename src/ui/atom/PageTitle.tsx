import classNames from "classnames";
import React, {ReactNode} from "react";

interface IProps {
    children: ReactNode;
    className?: string;
    wrap?: boolean;
}

const PageTitle = ({children, className, wrap}: IProps) => {
    return (
        <div
            className={classNames(
                "w-full flex",
                wrap ? "flex-col gap-y-2.5 sm:gap-4 md:flex-row md:justify-between" : "justify-between",
                className
            )}
        >
            {children}
        </div>
    );
};

export default PageTitle;
