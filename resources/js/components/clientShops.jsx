import React, { Component } from "react";
import ShopDetail from "./shop/shopDetail";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import MenuForm from "./menu/menuForm";
import GetMenu from "./menu/clientMenu";

class ClientShops extends Component {
    state = {
        shop: []
    };

    // componentDidMount() {
    //     axios.get("/oauth/personal-access-tokens").then(response => {
    //         console.log(response.data);
    //     });
    // }
    componentDidMount() {
        console.log("from ui DidM");
        axios.get("api/shop/show").then(res => {
            //console.log("from ui DidM" + JSON.stringify(res));
            this.setState({
                shop: res.data
            });
        });
    }

    render() {
        console.log("Ui render");
        const { shop } = this.state;
        return (
            <div>
                <div>
                    {shop.map((shop, i) => (
                        <div key={"shop" + i}>
                            <div>shopUI page</div>
                            <ShopDetail shop={shop} num={i} />
                            <GetMenu shop={shop} />
                            {/* <MenuForm shop={this.state.shop} /> */}
                            <button>load menu form</button>
                        </div>
                    ))}
                </div>
                <Router>
                    <nav>
                        <NavLink to="/createMenu/:xxxxxx">create menu</NavLink>
                    </nav>
                    <Switch>
                        <Route path="/createMenu/:sref">
                            <MenuForm />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default ClientShops;
