import React, { Component } from "react";

class Order extends Component {
    render() {
        // console.log(
        //     "in rendering order stringfy" + JSON.stringify(this.props.data)
        // );
        if (this.props.data.length > 0) {
            return (
                <div>
                    <div>Order page</div>
                    {this.props.data.map((data, i) => {
                        const order = data[0];
                        if (data.length > 0)
                            //put if here in case of the other shop
                            //has no order. It caused error!!!!!!
                            return (
                                <div key={"order" + i}>
                                    <div>Order Page</div>

                                    <div>shop id:{order.shop_id}</div>
                                    <div>addr:{order.deliAddr}</div>
                                    <div>ph:{order.contactPhone}</div>
                                    <div>
                                        {order.cardPay
                                            ? "pay with card"
                                            : "Cash"}
                                    </div>
                                    <div>cname:{order.cname}</div>
                                    <div>email:{order.email}</div>
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
