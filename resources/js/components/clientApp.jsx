import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
import ReactDOM from "react-dom";
//import ClientShops from "./shop/client/clientShops";
//import CreateShop from "../components/shop/createShop";
import MenuForm from "./menu/menuForm";
import ClientMenu from "./menu/clientMenu";
import Order from "./orders/order";

class ClientApp extends Component {
    state = {
        // showOrder: true,
        order: [],
        redirect: false
        // shop: []
    };
    componentDidMount() {
        console.log("from ui DidM");
        axios.get("api/order/show").then(res => {
            console.log("from ui DidM" + JSON.stringify(res.data));
            //const data=res.data;
            console.log("client APP didm called" + this.state.order.length);
            const data = res.data;
            if (data === "") {
                this.setState({ redirect: true });
            } else if (data.data.length > 0) {
                this.setState({
                    order: data.data
                });
            }
        });

        // axios.get("api/shop/show").then(res => {
        //     console.log("from ui DidM" + JSON.stringify(res));
        //     this.setState({
        //         shop: res.data
        //     });
        // });
    }

    render() {
        if (this.state.redirect) return <Redirect to="/clientShops" />;
        else {
            return (
                <div>
                    <div>loading ...</div>;
                    <Order data={this.state.order} />
                </div>
            );
        }
    }

    // return
}

export default ClientApp;
// if (document.getElementById("client222")) {
//     ReactDOM.render(<Client />, document.getElementById("client222"));
// }
