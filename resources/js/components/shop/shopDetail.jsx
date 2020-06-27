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
        console.log("shopDetail rendering" + this.props);
        //console.log(this.props);
        return (
            <div key={"shop"} className="">
                <img
                    src={`/storage/shop_img/${shop.img}`}
                    style={{ height: "250px", width: "100%" }}
                />
                <br />
                <div id="shop_txt" className="d-flex">
                    <div className="bg-light mr-4">Name:{shop.name}</div>

                    <div className="bg-light mr-4">Address:{shop.addr}</div>

                    <div>Phone:{shop.phone}</div>
                </div>
                <div id="otherDetail" className="">
                    <div style={{ backgroundColor: "#d9ffb3" }}>
                        {shop.area}
                    </div>
                    <div>Owner Name:{shop.owner_name}</div>
                    <div>Owner mobile:{shop.owner_mobl}</div>
                    <div>
                        Counter mobile:{shop.cter_mobl}(for receiving order
                        text)
                    </div>
                    <div>
                        Order mobile:{shop.order_mobl}(if extra order number
                        needed)
                    </div>
                    <div>Opening hours(Mon-Thu):{shop.open_hours}</div>
                    <div>Opening hours(Fri):</div>
                    <div>Opening hours(Sat):</div>
                    <div>Opening hours(Sun):</div>
                </div>
                <br />
                <div className="d-flex">
                    <img
                        src={`/storage/shop_img/${shop.img1}`}
                        style={{ height: "130px", width: "200px" }}
                    />

                    <div className="bg-light ml-3"> {shop.prom_txt1}</div>
                </div>
                <br />
                <div className="d-flex">
                    <img
                        src={`/storage/shop_img/${shop.img2}`}
                        style={{ height: "130px", width: "200px" }}
                    />

                    <div className="bg-light ml-3"> {shop.prom_txt2}</div>
                </div>
            </div>
        );
    }
}

export default ShopDetail;
// if (document.getElementById("shopDetail")) {
//     ReactDOM.render(<ShopDetail />, document.getElementById("shopDetail"));
// }
