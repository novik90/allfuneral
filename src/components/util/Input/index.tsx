import React from "react";
import "./Input.css";

interface Props {
    id: string;
    label: string;
    value: string;
    onChange: (e: string) => void;
}

const Input = ({ id, value, label, onChange }: Props) => {
    return (
        <div className="input">
            <input
                className="input__field"
                type="text"
                placeholder=" "
                id={id}
                onChange={(e) => onChange(e.target.value)}
                value={value}
            />
            <label className="input__label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default Input;
