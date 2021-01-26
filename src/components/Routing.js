import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./Nav";
import Registration from "./Registration";
import BuyProducts from "./BuyProducts";
import AllParts from "./AllParts";
import Footer from "./Footer";
import LoginPart from "./LoginPart";

class Routing extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>

                    <Nav/>

                    <Switch>
                        <Route exact path='/' component={AllParts}/>
                        <Route exact path='/registration' component={Registration}/>
                        <Route exact path='/login' component={LoginPart}/>
                        <Route exact path='/buyproducts' component={BuyProducts}/>
                    </Switch>

                    <Footer/>

                </BrowserRouter>

            </div>
        );
    }
}

export default Routing;