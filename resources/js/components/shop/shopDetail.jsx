import React, { Component } from "react";
import ReactDOM from "react-dom";
class ShopDetail extends Component {
    constructor() {
        super();
        this.state = {
            shop: ""
        };
    }
    componentDidMount() {
        axios.get("api/shop").then(res => {
            let sData = res.data;

            this.setState({
                shop: sData.data
            });
            console.log("whyres" + this.state.shop);
        });
    }
    render() {
        // let { shop } = this.state;
        console.log(this.state);
        return (
            <div>
                {/* this.state.shop.map(shop => { */}

                <div>
                    <div>wrong</div>
                    <div>{this.state.shop.addr}</div>
                    <div value={this.state.shop.phone}>
                        {this.state.shop.phone}
                    </div>
                </div>

                {/* }) */}
            </div>
        );
    }
}

export default ShopDetail;
// if (document.getElementById("shopDetail")) {
//     ReactDOM.render(<ShopDetail />, document.getElementById("shopDetail"));
// }
