import React from 'react';
import "../index.css";

const Button = ({ symbol, color, handleClick}) => {
    return (
        <>
            <div className='btn'
                style={{ backgroundColor: color }}
                onClick={() => handleClick(symbol)}>
                {symbol}
            </div>
        </>
    );
}

export default Button;