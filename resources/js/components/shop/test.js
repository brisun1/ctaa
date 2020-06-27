import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
import T11 from "../t11";
import T22 from "../t22";
import T33 from "../t33";
class Test extends Component {
    state = {};
    render() {
        return (
            <div>
                <div>hello test page</div>;
                <Router>
                    <nav className="d-flex justify-content-around bg-light">
                        <NavLink
                            to="/t11"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            t11
                        </NavLink>
                        <NavLink
                            to="/t22"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            t22
                        </NavLink>
                        <NavLink
                            to="/t33"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            t33
                        </NavLink>
                        {/* <NavLink
                            to="/clientShop/shopShow"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            Show shops
                        </NavLink> */}
                    </nav>
                    <Switch>
                        <Route exact path="/t11" component={T11}></Route>
                        <Route exact path="/t22" component={T22}></Route>
                        <Route exact path="/t33" component={T33}></Route>
                    </Switch>
                    <T11 />
                </Router>
            </div>
        );
    }
}

export default Test;
