import React, { Component } from "react";
import ReactDOM from "react-dom";
class ShopDetail extends Component {
    constructor() {
        super();
        this.state = {};
    }

    // componentDidMount() {
    //     axios.get("api/shop/show").then(res => {
    //         this.setState({
    //             shop: res.data
    //         });
    //     });
    // }
    render() {
        let { shop } = this.props;
        console.log(this.props);
        return (
            <div key={"shop"} className="d-flex">
                <div className="bg-light">{shop.name}</div>
                <div>Address:{shop.addr}</div>
                <div value={shop.phone}>Landline:{shop.phone}</div>
                )}
            </div>
        );
    }
}

export default ShopDetail;
// if (document.getElementById("shopDetail")) {
//     ReactDOM.render(<ShopDetail />, document.getElementById("shopDetail"));
// }
