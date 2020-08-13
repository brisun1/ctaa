import React, { Component } from "react";
class CashOrderConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonePwd: null
        };
    }
    handlePhonePwdChange = e => {
        this.setState({ phonePwd: e.target.value });
    };
    handleSubmitPwd = e => {
        e.preventDefault(e);
        let data = { phonePwd: this.state.phonePwd };
        axios
            .post(
                "api/order/matchPwd/" + this.props.custData.orderTblString,
                data,
                {
                    baseURL: "/"
                }
            )
            .then(res => {
                //console.log("pwddddddddd" + JSON.stringify(res));
                if (res.data == "pwd matched") {
                    this.props.handleSubmitFoodForm();
                    // if (this.props.custData.foodSubmited == true) {
                    //this.props.handleNextStep();
                    // this.props.handleNextStep();
                    // }
                }
            });
    };

    render() {
        // const { custData } = this.props;
        // if (custData.cashConfirm)
        return (
            <>
                <button
                    onClick={this.props.handlePrevStep}
                    className="btn btn-secondary"
                >
                    {"< "}Back
                </button>
                <h6 className="text-center">Order Confirmation</h6>
                <hr />
                <form onSubmit={this.handleSubmitPwd}>
                    <label htmlFor="pwd" className="text-primary">
                        Confirm Code
                    </label>
                    <input
                        className="form-control"
                        id="pwd"
                        onChange={this.handlePhonePwdChange}
                    />
                    <button
                        type="submit"
                        //onClick={this.handleSubmitPwd}
                        className="btn btn-primary float-right"
                    >
                        Enter
                    </button>
                </form>
                <hr />
            </>
        );
    }
}

export default CashOrderConfirm;
