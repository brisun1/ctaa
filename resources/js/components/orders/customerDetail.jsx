import React, { Component } from "react";
class CustomerDetail extends Component {
    state = {};
    render() {
        const { custData } = this.props;
        const { deliPrice } = custData;
        return (
            <div>
                <h6>The order information you provide is as following:</h6>
                <br />
                <label>{custData.isDeli ? "Delivery" : "Collection"}</label>

                <br />
                {deliPrice == "max"
                    ? custData.isDeli && (
                          <div className="text-warning float-right">
                              The delivery address might be too far to serve.
                              Please contact the shop.
                          </div>
                      )
                    : custData.isDeli &&
                      deliPrice > 0 && (
                          <div className="float-right">
                              Delivery Price: {deliPrice}
                          </div>
                      )}

                <label>Your contact number: &nbsp;{custData.custPhone}</label>
                <br />
                {custData.isDeli ? (
                    custData.isDeli && (
                        <label>Your delivery address:{custData.custAddr}</label>
                    )
                ) : (
                    <div> {""}</div>
                )}
                {custData.isDeli && custData.addrError == "NOT_FOUND" && (
                    <div className="text-danger float-right">
                        <div>
                            We didn't find your address on google map . Make
                            sure the food is deliverable !
                        </div>
                        <div>And the delivery price may vary.</div>
                    </div>
                )}
                <br />
                <br />

                <div className="d-flex ">
                    <div>Total to pay</div>

                    <div className="ml-auto">
                        {this.props.getTotal().toFixed(2)}
                    </div>
                </div>
                <br />
                <br />
                <label>
                    Pay method:{custData.cardPay ? "By card" : "By cash"}
                </label>
                <br />
                <label>Message to shop: {custData.orderMsg}</label>
                <hr />
            </div>
        );
    }
}

export default CustomerDetail;
