import React from "react";
import Svg, { icons } from "../Svg";
import "./Button.css";

interface Props {
    text: string;
    onClick?: () => void;
    buttonClasses?: string;
    icon?: boolean;
}

const Button = ({ text, onClick, buttonClasses, icon = true }: Props) => {
    const classes = buttonClasses;
    return (
        <button onClick={onClick} className={`button ${classes}`}>
            {icon && <Svg id={icons.PLUS} />}
            <p className="button__text">{text}</p>
        </button>
    );
};

export default Button;
