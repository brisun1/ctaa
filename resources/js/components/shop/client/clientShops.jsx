import React, { Component } from "react";
import ShopDetail from "../shopDetail";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import MenuForm from "../../menu/menuForm";
import ClientMenu from "../../menu/clientMenu";
import CreateShop from "../createShop";

class ClientShops extends Component {
    _isMounted = false;

    state = {
        shop: []
    };

    // componentDidMount() {
    //     axios.get("/oauth/personal-access-tokens").then(response => {
    //         console.log(response.data);
    //     });
    // }
    componentDidMount() {
        this._isMounted = true;
        //console.log("from clientShop ui DidM");
        axios.get("api/shop/show").then(res => {
            console.log("from ui DidM" + JSON.stringify(res));
            this.setState({
                shop: res.data
            });
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        if (this.props.shop.length == 0) {
            return (
                <div>
                    <h5 className="d-flex justify-content-center text-secondary font-weight-bold">
                        Shop Registration Form
                    </h5>
                    <h5 className="d-flex justify-content-center text-secondary font-weight-bold">
                        门店登记表
                    </h5>
                    <br />

                    <CreateShop />
                </div>
            );
        } else {
            console.log("clientSHOP render");
            //const { shop } = this.state;

            return (
                <div>
                    <div>Shop detail</div>
                    {this.props.shop.map((shop, i) => (
                        <div key="shopge">
                            <div key={"shop" + i}>
                                <ShopDetail shop={shop} num={i} />
                                {1 == 2 ? (
                                    <ClientMenu shop={shop} />
                                ) : (
                                    <div>
                                        {/* <div>shop id:{console.log("wwwww" + shop.id)}</div> */}
                                        <Router>
                                            <nav>
                                                <NavLink
                                                    to={`/createMenu/:${shop.id}`}
                                                >
                                                    create menu
                                                </NavLink>
                                            </nav>
                                            <Switch>
                                                <Route
                                                    path={`/createMenu/:${shop.id}`}
                                                >
                                                    <MenuForm />
                                                </Route>
                                            </Switch>
                                        </Router>
                                    </div>
                                )}
                                ;{/* <ClientMenu shop={shop} /> */}
                                {/* <MenuForm shop={this.state.shop} /> */}
                                <button>load menu form</button>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default ClientShops;
