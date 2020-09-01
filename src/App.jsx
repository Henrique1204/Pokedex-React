import React, {Fragment} from "react";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import Footer from "./Componentes/Footer";
import Pokedex from "./Componentes/Pokedex";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

export default () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Header>
                    <ul className="centralizar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pokedex">Pokedex</Link></li>
                    </ul>
                </Header>
                
                <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/pokedex" component={Pokedex}></Route>
                </Switch>

                <Footer />
            </Fragment>
        </BrowserRouter>
    );
}
