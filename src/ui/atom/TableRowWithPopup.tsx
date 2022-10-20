import {Popover, Transition} from "@headlessui/react";
import {InformationCircleIcon} from "@heroicons/react/24/outline";
import FormattedPopupInfo from "atom/FormattedPopupInfo";
import classNames from "classnames";
import React, {Fragment, ReactNode, useState} from "react";
import {usePopper} from "react-popper";

interface IProps {
    children: ReactNode;
    popupInfo: ReactNode;
}

function TableRowWithPopup({children, popupInfo}: IProps) {
    let [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>();
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
        <Popover as={Fragment}>
            <Popover.Button
                as="div"
                tabIndex={0}
                ref={setReferenceElement}
                className={classNames(
                    "table-row group text-xs bg-white text-gray-800 border-none border-gray-200 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:z-10",
                    "sm:text-sm md:text-base lg:text-lg xl:text-xl"
                )}
            >
                {children}
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
                <Popover.Panel className="text-2xs sm:text-xs lg:text-sm">{popupInfo}</Popover.Panel>
            </Transition>
        </Popover>
    );
}

export default TableRowWithPopup;
