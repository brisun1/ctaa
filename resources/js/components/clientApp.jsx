import React, { useState, useEffect } from "react";
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
import FoodDetail from "./orders/foodDetail2";

const ClientApp = () => {
    const [order, setOrder] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (async () => {
            console.log("from ui DidM");
            let res = await axios.get("api/order/show");
            // console.log("from ui DidM" + JSON.stringify(res.data));

            //console.log("client APP didm called" + this.state.order.length);
            const data = await res.data;
            if (data === "") {
                setRedirect(true);
            } else if (data.data.length > 0) {
                setOrder(data.data);
            }

            // axios.get("api/shop/show").then(res => {
            //     console.log("from ui DidM" + JSON.stringify(res));
            //     this.setState({
            //         shop: res.data
            //     });
            // });
        })();
    }, [data]);

    if (redirect) return <Redirect to="/clientShops" />;
    else {
        return (
            <div>
                <div>loading ...</div>;
                <Order orders={order} />
            </div>
        );
    }

    // return
};

export default ClientApp;
// if (document.getElementById("client222")) {
//     ReactDOM.render(<Client />, document.getElementById("client222"));
// }
