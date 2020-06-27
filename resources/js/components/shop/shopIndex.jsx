import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
import ReactDOM from "react-dom";
//import ClientApp from "./clientApp";
//import Order from "./orders/order";
import MenuForm from "../menu/menuForm";
import MenuShow from "../menu/menuShow";
import ShopApp from "./shopApp";
import CreateShop from "./createShop";
import ClientShops from "./client/clientShops";
import DeliForm from "../menu/deliveryForm";
import DeliShow from "../menu/deliShow";

class ShopIndex extends Component {
    state = {
        schedule: { name: null, tblString: null },
        shop: [],
        links: []
    };
    componentDidMount() {
        //this._isMounted = true;
        //console.log("from clientShop ui DidM");
        axios.get("api/shop/show").then(res => {
            console.log("from ui DidM" + JSON.stringify(res));
            const schedule = { ...this.state.schedule };
            const links = [...this.state.links];

            if (res.data.data) {
                const shop = res.data.data;
                shop.forEach;
                links.push("shopShow");
                this.setState({
                    //schedule: "createShop",
                    shop: res.data.data
                });
                if (res.data.meta.noMenu) {
                    schedule.name = "createMenu";
                    schedule.tblString = res.data.meta.noMenu;
                    this.setState({
                        schedule
                    });
                    links.push("createMenu");
                } else {
                    links.push("menuShow");
                    if (res.data.meta.noDeli) {
                        schedule.name = "createDeli";
                        schedule.tblString = res.data.meta.noDeli;
                        this.setState({
                            schedule
                        });
                        links.push("createDeli");
                    } else {
                        links.push("deliShow");
                    }
                }
                this.setState({ links });
            } else {
                // const schedule={...this.state.schedule};
                //schedule.name="createShop";
                this.setState({
                    name: "createShop"
                });
                links.push("createShop");
                this.setState({ links });
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    getLinks = () => {
        const linksToShow = [];
        const createShop = (
            <NavLink
                key="cs"
                to="/createShop"
                activeClassName="bg-warning pl-3 pr-3"
            >
                Create shop
            </NavLink>
        );
        const shopShow = (
            <NavLink
                key="ss"
                to="/shopShow"
                activeClassName="bg-warning pl-3 pr-3"
            >
                Show shops
            </NavLink>
        );
        const createMenu = (
            <NavLink
                key="cm"
                to="/createMenu"
                activeClassName="bg-warning pl-3 pr-3"
            >
                Create menu
            </NavLink>
        );
        const menuShow = (
            <NavLink
                key="ms"
                to="/menuShow"
                activeClassName="bg-warning pl-3 pr-3"
            >
                Show menu
            </NavLink>
        );
        const createDeli = (
            <NavLink
                key="cm"
                to="/createDeli"
                activeClassName="bg-warning pl-3 pr-3"
            >
                Create Delivery
            </NavLink>
        );
        const deliShow = (
            <NavLink
                key="ss"
                to="/deliShow"
                activeClassName="bg-warning pl-3 pr-3"
            >
                Delivery price
            </NavLink>
        );
        const { links } = this.state;
        for (let i = 0; i <= links.length; i++) {
            linksToShow.push(eval(links[i]));
        }

        return linksToShow;
    };

    render() {
        return (
            <div>
                <Router>
                    <nav className="d-flex justify-content-around bg-light">
                        <NavLink
                            to="/clientShops"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            default page
                        </NavLink>
                        {this.getLinks()}
                    </nav>
                    <Switch>
                        <Route exact path="/clientShops">
                            <Redirect to="shopsDefault" />
                        </Route>
                        <Route exact path="/shopsDefault">
                            <ShopApp data={this.state} />
                        </Route>

                        <Route
                            exact
                            path="/createShop"
                            component={CreateShop}
                        ></Route>

                        <Route exact path="/shopShow">
                            <ClientShops shop={this.state.shop} />
                        </Route>

                        <Route exact path="/createMenu">
                            <MenuForm
                                tblString={this.state.schedule.tblString}
                            />
                        </Route>
                        <Route exact path="/menuShow">
                            <MenuShow shop={this.state.shop} />
                        </Route>
                        <Route exact strict path="/default">
                            <ShopApp data={this.state} />
                        </Route>
                        <Route exact path="/createDeli">
                            <DeliForm
                                tblString={this.state.schedule.tblString}
                            />
                        </Route>
                        <Route exact path="/deliShow">
                            <DeliShow shop={this.state.shop} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default ShopIndex;
