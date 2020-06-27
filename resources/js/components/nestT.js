import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import ReactDOM from "react-dom";
//import ClientApp from "./clientApp";
//import Order from "./orders/order";
//import ClientShops from "./shop/clientShops";
import Test from "./shop/test";
import Test1 from "./shop/test1";
import Tapp from "./tapp";
class NestT extends Component {
    state = {};
    render() {
        return (
            <div>
                <Router>
                    <nav className="d-flex justify-content-around bg-success">
                        <NavLink
                            to="/dashBoard"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            home
                        </NavLink>
                        <NavLink
                            to="/test"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            test
                        </NavLink>
                        <NavLink
                            to="/test1"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            test1
                        </NavLink>
                    </nav>
                    <Switch>
                        <Route path="/dashBoard">
                            <Tapp />
                        </Route>
                        <Route exact path="/test">
                            <Test />
                        </Route>
                        <Route exact path="/test1">
                            <Test1 />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default NestT;
if (document.getElementById("client3")) {
    ReactDOM.render(<NestT />, document.getElementById("client3"));
}
