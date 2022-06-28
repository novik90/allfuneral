import React from "react";
import Svg, { icons } from "../Svg";
import "./Button.css";

interface Props {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
    return (
        <button onClick={onClick} className="button button__primary">
            <Svg id={icons.PLUS} />
            <p className="button__text">{text}</p>
        </button>
    );
};

export default Button;
