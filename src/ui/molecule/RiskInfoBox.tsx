import {Popover, Transition} from "@headlessui/react";
import {InformationCircleIcon} from "@heroicons/react/24/outline";
import FormattedPopupInfo from "atom/FormattedPopupInfo";
import classNames from "classnames";
import React, {useState} from "react";
import {usePopper} from "react-popper";

interface IProps {
    content: string | number;
    info: string;
    title: string;
}

function RiskInfoBox({content, info, title}: IProps) {
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
                    "group w-32 h-24 p-2.5 flex flex-col justify-between bg-white border border-gray-200 rounded text-center hover:bg-gray-100 focus:bg-gray-100",
                    "sm:w-40 sm:h-28 sm:p-3",
                    "lg:w-52 lg:h-28 lg:p-3.5"
                )}
            >
                <div className="w-full flex flex-1 items-center justify-center text-xs sm:text-sm lg:text-base">
                    <span>{title}</span>
                </div>
                <div className="w-full text-center text-sm font-bold sm:text-lg lg:text-xl">{content}</div>
                <InformationCircleIcon className="absolute top-0 right-0 w-4 h-4 shrink-0 text-gray-300 group-hover:text-gray-500 group-focus:text-gray-500 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </Popover.Button>
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
                <Popover.Panel className="text-2xs sm:text-xs lg:text-sm">
                    <FormattedPopupInfo info={info} title={title} value={content.toString()} />
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

export default RiskInfoBox;
