import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
} from "react-router-dom";
import ReactDOM from "react-dom";
//import ClientApp from "./clientApp";
//import Order from "./orders/order";
import MenuForm from "../menu/menuForm";
import ClientMenu from "../menu/clientMenu";
import EditMenu from "../menu/editMenu";
import ShopApp from "./shopApp";
import CreateShop from "./client/createShop";

import DeliForm from "../delivery/deliveryForm";
import DeliShow from "../menu/deliShow";
import ShopDetail from "./shopDetail";
import EditShop from "./client/editShop";

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
                const schedule = { ...this.state.schedule };
                schedule.name = "createShop";
                this.setState({
                    schedule
                    //name: "createShop"
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
                Create Shop
            </NavLink>
        );
        const shopShow = (
            <NavLink
                key="ss"
                to="/shopShow"
                activeClassName="bg-warning pl-3 pr-3"
            >
                Show Shop
            </NavLink>
        );
        const createMenu = (
            <NavLink
                key="cm"
                to="/createMenu"
                activeClassName="bg-warning pl-3 pr-3"
            >
                Create Menu
            </NavLink>
        );
        const menuShow = (
            <NavLink
                key="ms"
                to="/menuShow"
                activeClassName="bg-warning pl-3 pr-3"
            >
                Show Menu
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
                key="ds"
                to="/deliShow"
                activeClassName="bg-warning pl-3 pr-3"
            >
                Delivery Price
            </NavLink>
        );
        const { links } = this.state;
        for (let i = 0; i <= links.length; i++) {
            linksToShow.push(eval(links[i]));
        }

        return linksToShow;
    };

    render() {
        let tblString = "";
        if (this.state.shop[0]) {
            const shop = this.state.shop[0];
            tblString = shop.shopName + shop.area + shop.id;
        }
        return (
            <div>
                <Router>
                    <nav className="d-flex justify-content-around bg-light">
                        <NavLink
                            to="/shopDefault"
                            activeClassName="bg-warning pl-3 pr-3"
                        >
                            Default Page
                        </NavLink>
                        {this.getLinks()}
                    </nav>
                    <Switch>
                        <Route exact path="/clientShops">
                            <Redirect to="shopDefault" />
                        </Route>
                        <Route exact path="/shopDefault">
                            <ShopApp data={this.state} />
                        </Route>

                        <Route
                            exact
                            path="/createShop"
                            component={CreateShop}
                        ></Route>

                        <Route exact path="/shopShow">
                            <ShopDetail shop={this.state.shop[0]} num={0} />
                        </Route>
                        <Route exact path="/editShop">
                            <EditShop shop={this.state.shop[0]} num={0} />
                        </Route>

                        <Route exact path="/createMenu">
                            <MenuForm tblString={tblString} />
                        </Route>
                        <Route exact path="/menuShow">
                            <ClientMenu tblString={tblString} />
                        </Route>
                        <Route exact path="/editMenu">
                            <EditMenu tblString={tblString} />
                        </Route>
                        <Route exact strict path="/default">
                            <ShopApp data={this.state} />
                        </Route>
                        <Route exact path="/createDeli">
                            <DeliForm shop={this.state.shop[0]} />
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
