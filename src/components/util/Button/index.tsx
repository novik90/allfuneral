import React, { useEffect, useState } from "react";
import Svg, { icons } from "../Svg";
import "./Button.scss";

interface Props {
    text: string;
    disabled?: boolean;
    primary?: string;
}

const Button = ({ text, disabled = false, primary = "PRIMARY" }: Props) => {
    const [buttonClassName, setButtonClassName] = useState("button");

    useEffect(() => {
        return () => {
            if (primary === "PRIMARY") {
                setButtonClassName((prev) => prev + " button__primary");
            }
            if (disabled) {
                setButtonClassName((prev) => prev + " button__disabled");
            }
        };
    }, []);

    return (
        <button className={buttonClassName}>
            <Svg id={icons.PLUS} />
            <p className="button__text">{text}</p>
        </button>
    );
};

export default Button;
