import React, { Component } from "react";
import ShopDetail from "./shopDetail";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    withRouter,
    Redirect
} from "react-router-dom";
import MenuForm from "../menu/menuForm";
//import ClientMenu from "../menu/clientMenu";
import CreateShop from "./createShop";

class ShopApp extends Component {
    _isMounted = false;

    state = {
        //redirect: true
        //shop: []
    };

    // componentDidMount() {
    //     axios.get("/oauth/personal-access-tokens").then(response => {
    //         console.log(response.data);
    //     });
    // }
    componentDidMount() {
        // this._isMounted = true;
        // console.log("from ui DidM");
        // this.setState({ redirect: true });
        // axios.get("api/menu/show").then(res => {
        //     //console.log("from ui DidM" + JSON.stringify(res.data));
        //     //const data=res.data;
        //     //console.log("client APP didm called" + this.state.order.length);
        //     const data = res.data;
        //     if (data === "") {
        //         this.setState({ redirect: true });
        //     } else if (data.data.length > 0) {
        //         this.setState({
        //             order: data.data
        //         });
        //     }
        // });
        //console.log("from clientShop ui DidM");
        // axios.get("api/shop/show").then(res => {
        //     console.log("from ui DidM" + JSON.stringify(res));
        //     this.setState({
        //         shop: res.data
        //     });
        // });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        console.log(this.props);

        //const { schedule } = this.props.data;
        // if (redirect) return <Redirect to={`/clientShops/createShop`} />;
        // else {
        const { schedule } = this.props.data;

        if (schedule.name) {
            return <Redirect to={"/" + schedule.name} />;
        } else {
            return (
                <div>
                    <div>loading default...</div>;
                    {/* <Order data={this.state.order} /> */}
                </div>
            );
            //}

            // if (this.props.shop.length == 0) {
            //     return (
            //         <div>
            //             <h5 className="d-flex justify-content-center text-secondary font-weight-bold">
            //                 Shop Registration Form
            //             </h5>
            //             <h5 className="d-flex justify-content-center text-secondary font-weight-bold">
            //                 门店登记表
            //             </h5>
            //             <br />

            //             <CreateShop />
            //         </div>
            //     );
            // } else {
            //console.log("clientSHOP render");

            // return (
            //     <div>
            //         <div>Shop detail</div>
            //         {this.props.shop.map((shop, i) => (
            //             <div key="shopge">
            //                 <div key={"shop" + i}>
            //                     <ShopDetail shop={shop} num={i} />
            //                     {1 == 2 ? (
            //                         <ClientMenu shop={shop} />
            //                     ) : (
            //                         <div>
            //                             {/* <div>shop id:{console.log("wwwww" + shop.id)}</div> */}
            //                             <Router>
            //                                 <nav>
            //                                     <NavLink
            //                                         to={`/createMenu/:${shop.id}`}
            //                                     >
            //                                         create menu
            //                                     </NavLink>
            //                                 </nav>
            //                                 <Switch>
            //                                     <Route
            //                                         path={`/createMenu/:${shop.id}`}
            //                                     >
            //                                         <MenuForm />
            //                                     </Route>
            //                                 </Switch>
            //                             </Router>
            //                         </div>
            //                     )}
            //                     ;{/* <ClientMenu shop={shop} /> */}
            //                     {/* <MenuForm shop={this.state.shop} /> */}
            //                     <button>load menu form</button>
            //                 </div>
            //             </div>
            //         ))}
            //     </div>
            // );
        }
    }
}

export default ShopApp;
//export default ShopApp;
