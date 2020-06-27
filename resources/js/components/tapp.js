import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
import ReactDOM from "react-dom";
import ShopTest from "./shop/shopTest";
//import ClientShops from "./shop/clientShops";
//import CreateShop from "../components/shop/createShop";
// import MenuForm from "./menu/menuForm";
// import ClientMenu from "./menu/clientMenu";
// import Order from "./orders/order";

class Tapp extends Component {
    state = {
        // showOrder: true,
        //order: [],
        redirect: false
        // shop: []
    };
    componentDidMount() {
        // console.log("from ui DidM");
        // axios.get("api/order/show").then(res => {
        //     console.log("from ui DidM" + JSON.stringify(res.data));
        //     //const data=res.data;
        //     console.log("client APP didm called" + this.state.order.length);
        //     const data = res.data;
        //     if (data === "") {
        //         this.setState({ redirect: true });
        //     } else if (data.data.length > 0) {
        //         this.setState({
        //             order: data.data
        //         });
        //     }
        // });
    }

    render() {
        if (1 == 1) return <Redirect to="/test" />;
        else {
            return (
                <div>
                    <div>loading ...</div>;
                    <ShopTest />
                </div>
            );
        }
    }

    // return
}

export default Tapp;
// if (document.getElementById("client222")) {
//     ReactDOM.render(<Client />, document.getElementById("client222"));
// }
