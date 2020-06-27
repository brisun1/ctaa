import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Facia from "./facia";
import MenuShow from "../menu/menuShow";
import Map from "../maps/map";
import "../../../css/style.css";
class App extends Component {
    constructor() {
        super();
        //const favourite = null;
        this.state = {
            chosen: null,
            shop: []
        };
    }

    componentDidMount() {
        axios.get("api/shop/index").then(res => {
            console.log("from did mount");
            this.setState({
                shop: res.data
            });
            if (null == this.state.chosen) {
                let rand = Math.floor(Math.random() * this.state.shop.length);

                this.setState({
                    chosen: rand
                });
            }
        });
    }

    chosenShop = () => {
        const { chosen, shop } = this.state;
        let i = 0;
        // console.log("shop index" + JSON.stringify(shop[3]));
        // const shop3 = shop[3];
        // console.log("this is id:" + shop3.id);

        if (shop.length > 0) {
            const index = shop.findIndex(x => x.id == chosen);
            return (
                <div>
                    <div>show me</div>
                    <Facia shop={shop[index]} num={i} style="" />
                    <MenuShow shop={shop[index]} />
                    <Map center={shop[index].addr} />
                    <div>
                        {console.log("from chosenshop funct" + shop[index])}
                    </div>
                </div>
            );
        }
    };

    render() {
        // console.log("from app render");

        return (
            <Fragment>
                <div id="me">check bg color</div>
                {this.chosenShop()}
                {/* <div key="menu">{this.chosenShop()}</div> */}

                <div>any</div>
                {this.state.shop.map((s, i) =>
                    s.id != this.state.chosen ? (
                        <div key={"shop" + i}>
                            <div>App page</div>
                            <Facia shop={s} num={i} />
                        </div>
                    ) : null
                )}
            </Fragment>
        );
    }
}

export default App;
if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
