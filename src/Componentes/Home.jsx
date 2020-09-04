import React from "react";
import Card from "./Card";

export default () => {
    return (
        <main className="container centralizar">
            <Card isHome={true} classes={"col-6"}/>
        </main>
    );
}
