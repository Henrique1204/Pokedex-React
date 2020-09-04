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
                        <li><Link to="/workshop-react-pokedex/"><span>Home</span></Link></li>
                        <li><Link to="/workshop-react-pokedex/pokedex"><span>Pokedex</span></Link></li>
                    </ul>
                </Header>
                
                <Switch>
                    <Route path="/workshop-react-pokedex/" exact component={Home}></Route>
                    <Route path="/workshop-react-pokedex/pokedex" component={Pokedex}></Route>
                </Switch>

                <Footer />
            </Fragment>
        </BrowserRouter>
    );
}
