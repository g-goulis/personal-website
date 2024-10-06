import {ReactNode} from "react";

type Props = {
    children?: ReactNode;
    tip: String;
};

const Tooltip = ({ children, tip }: Props) => {
    return (
        <div className="tooltip tooltip-top tooltip-primary" data-tip={tip} >
            {children}
        </div>
    );
};

export default Tooltip;
