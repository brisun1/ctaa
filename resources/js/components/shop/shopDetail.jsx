import React, { Component } from "react";
import ReactDOM from "react-dom";
class ShopDetail extends Component {
    constructor() {
        super();
        this.state = {
            shop: []
        };
    }

    // componentDidMount() {
    //     axios.get("/oauth/personal-access-tokens").then(response => {
    //         console.log(response.data);
    //     });
    // }
    componentDidMount() {
        axios.get("api/shop/show").then(res => {
            this.setState({
                shop: res.data
            });
        });
    }
    render() {
        // let { shop } = this.state;
        console.log(this.state);
        return (
            <div>
                <div>test</div>
                {this.state.shop.map(shop => {
                    return (
                        <div>
                            <div>wrong</div>
                            <div>{shop.addr}</div>
                            <div value={shop.phone}>{shop.phone}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ShopDetail;
// if (document.getElementById("shopDetail")) {
//     ReactDOM.render(<ShopDetail />, document.getElementById("shopDetail"));
// }
