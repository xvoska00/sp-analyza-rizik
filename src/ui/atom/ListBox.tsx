import {useState} from "react";
import {Listbox} from "@headlessui/react";
import {ChevronUpDownIcon} from "@heroicons/react/24/solid";
import classNames from "classnames";
import {FilterOption} from "pages/plan-zvladani-rizik";

interface IProps {
    className?: string;
    filter(option?: FilterOption | string): void;
    options: string[];
}

const MyListbox = ({className, filter, options}: IProps) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <div className={className}>
            <Listbox
                value={selectedOption}
                onChange={option => {
                    setSelectedOption(option);
                    filter(option);
                }}
            >
                <div className="relative">
                    <Listbox.Button
                        className={classNames(
                            "w-52 p-2 flex justify-between items-center rounded border border-gray-200",
                            "text-xs sm:text-sm md:text-base lg:text-lg",
                            "bg-white hover:bg-gray-100 focus:bg-gray-100"
                        )}
                    >
                        <span>{selectedOption}</span>
                        <ChevronUpDownIcon className="w-4 h-4 text-gray-500 shrink-0 md:w-5 md:h-5" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 w-52 mt-1 rounded border border-gray-200 bg-white">
                        {options.map(option => (
                            <Listbox.Option key={option} value={option}>
                                {({active}) => (
                                    <div
                                        className={classNames(
                                            "p-2 cursor-pointer",
                                            active && "bg-gray-100",
                                            "text-xs sm:text-xs md:text-sm lg:text-base"
                                        )}
                                    >
                                        {option}
                                    </div>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    );
};

export default MyListbox;
