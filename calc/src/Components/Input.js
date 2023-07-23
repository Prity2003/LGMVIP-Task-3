import React from "react";
import "../index.css";

const Input = ({ text, result }) => {
    return (
        <>
            <div className="input">
                <div className="result">
                    <h1>{result}</h1>
                </div>
                <div className="text">
                    <h2>{text}</h2>
                </div>

            </div>
        </>
    )
}

export default Input;