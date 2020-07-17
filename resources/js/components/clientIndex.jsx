import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import ReactDOM from "react-dom";
import ClientApp from "./clientApp";
import Order from "./orders/order";
//import ClientShops from "./shop/clientShops";
import ShopIndex from "./shop/shopIndex";
import { Icon } from "@iconify/react";
import homeIcon from "@iconify/icons-mdi-light/home";

class ClientIndex extends Component {
    state = {};
    render() {
        return (
            <div>
                <a href="/">
                    <Icon
                        icon={homeIcon}
                        style={{ fontSize: 30, color: "#f59542" }}
                    />
                    Home
                </a>
                <Router>
                    <nav className="d-flex justify-content-around bg-success">
                        <NavLink
                            to="/dashBoard"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            Orders
                        </NavLink>
                        <NavLink
                            to="/clientShops"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            Shops
                        </NavLink>
                    </nav>
                    <Switch>
                        <Route path="/dashBoard">
                            <ClientApp />
                        </Route>
                        <Route exact path="/clientShops">
                            <ShopIndex />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default ClientIndex;
if (document.getElementById("client")) {
    ReactDOM.render(<ClientIndex />, document.getElementById("client"));
}
