import classNames from "classnames";
import Link from "next/link";
import {ForwardedRef, forwardRef} from "react";

interface IProps {
    active: boolean;
    href: string;
    children: string;
}

const SelectAnalysisLink = forwardRef(
    ({active, href, children, ...rest}: IProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        return (
            <Link href={href}>
                <a
                    ref={ref}
                    {...rest}
                    className={classNames(
                        "flex justify-center w-full py-2 text-xs text-gray-800",
                        "md:text-sm",
                        "lg:text-base",
                        "xl:text-lg",
                        active && "bg-gray-100"
                    )}
                >
                    {children}
                </a>
            </Link>
        );
    }
);

export default SelectAnalysisLink;
