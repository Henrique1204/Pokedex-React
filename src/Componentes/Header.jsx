import React from "react";
import "../css/Header.css";

export default (props) => {
    return (
        <header>
            <h1>Pokédex React</h1>
            <nav>
                {props.children}
            </nav>
        </header>
    );
}