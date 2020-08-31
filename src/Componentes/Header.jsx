import React from "react";
import "../css/Header.css";

export default () => {
    return (
        <header>
            <h1>Pokédex React</h1>
            <nav>
                <ul className="centralizar">
                    <li><a>Home</a></li>
                    <li><a>Pokédex</a></li>
                </ul>
            </nav>
        </header>
    );
}