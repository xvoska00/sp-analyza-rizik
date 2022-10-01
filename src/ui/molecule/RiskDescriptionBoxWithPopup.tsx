import {Popover, Transition} from "@headlessui/react";
import {InformationCircleIcon} from "@heroicons/react/24/outline";
import FormattedPopupInfo from "atom/FormattedPopupInfo";
import classNames from "classnames";
import React, {ReactNode, useState} from "react";
import {usePopper} from "react-popper";

interface IProps {
    children: ReactNode;
    info: string;
    label: string;
    value: string;
}

function RiskDescriptionBoxWithPopup({children, info, label, value}: IProps) {
    let [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
    let [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
    let {styles, attributes} = usePopper(referenceElement, popperElement, {
        placement: "bottom",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 5]
                }
            },
            {
                name: "preventOverflow",
                options: {
                    padding: 10
                }
            }
        ]
    });

    return (
        <Popover className="relative">
            <Popover.Button
                ref={setReferenceElement}
                className={classNames(
                    "group relative w-24 h-9 shrink-0 flex justify-center items-center rounded text-sm font-semibold",
                    "border border-gray-200 text-gray-500 bg-white hover:bg-gray-100 focus:bg-gray-100",
                    "sm:w-28 sm:h-10",
                    "md:w-32 md:h-12 md:text-base",
                    "lg:w-36 lg:h-14 lg:text-lg",
                    "xl:w-40 xl:h-16 xl:text-xl"
                )}
            >
                {children}
                <InformationCircleIcon className="absolute top-0 right-0 w-3 h-3 shrink-0 text-gray-300 group-hover:text-gray-500 group-focus:text-gray-500 md:w-4 md:h-4 xl:w-5 xl:h-5" />
            </Popover.Button>
            <div
                className={classNames(
                    "absolute top-0 left-2 -translate-y-3/4 px-1 text-2xs font-semibold text-gray-500 bg-gray-50 leading-none",
                    "sm:text-xs sm:left-2.5",
                    "lg:text-sm"
                )}
            >
                {label}
            </div>
            <Popover.Overlay className="fixed z-10 inset-0 bg-black opacity-30" />
            <Transition
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-0 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-0 opacity-0"
                className="absolute z-10 bg-white border border-gray-200 p-2.5 rounded"
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
            >
                <Popover.Panel>
                    <FormattedPopupInfo info={info} title={label} value={value} />
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

export default RiskDescriptionBoxWithPopup;
