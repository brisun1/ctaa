import React, { Component } from "react";
import FoodDetail2 from "./foodDetail2";

class Order extends Component {
    render() {
        // console.log(
        //     "in rendering order stringfy" + JSON.stringify(this.props.data)
        // );
        if (this.props.orders.length > 0) {
            return (
                <div>
                    <h5>Order page</h5>
                    {this.props.orders.map((order, i) => {
                        // const order = data[0];
                        // if (data.length > 0)
                        //put if here in case of the other shop
                        //has no order. It caused error!!!!!!
                        return (
                            <div key={"order" + i}>
                                <FoodDetail2
                                    orderTblString={order.orderFoodTbl}
                                />
                                <div>shop id:{order.shop_id}</div>
                                <div>addr:{order.deliAddr}</div>
                                <div>ph:{order.contactPhone}</div>
                                <div>Amount to pay:{order.amtToPay}</div>
                                <div>
                                    {order.cardPay ? "pay with card" : "Cash"}
                                </div>
                                <div>cname:{order.cname}</div>
                                <div>email:{order.email}</div>
                                <hr />
                            </div>
                        );
                    })
                    //} else return <div>no order</div>;
                    }
                </div>
            );
        } else return <div>No order</div>;
    }
}

export default Order;
