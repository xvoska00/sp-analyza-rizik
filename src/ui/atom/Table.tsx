import React, {ReactNode} from "react";

interface IProps {
    head: ReactNode;
    body: ReactNode | ReactNode[];
}

const Table = ({head, body}: IProps) => {
    return (
        <div className="table w-ful border-separate border-spacing-0 border-t border-gray-200">
            <div className="table-header-group">{head}</div>
            <div className="table-row-group">{body}</div>
        </div>
    );
};

export default Table;
