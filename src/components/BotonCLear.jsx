import React from "react";
import '../styles/BotonClear.css';

const BotonClear = (props) => {
    return (
        <div
            className="btn-clear"
            onClick={props.manejarClick}
        >
            {props.children}
        </div>
    );
}

export default BotonClear;