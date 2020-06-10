import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class Facia extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //value: this.props.value,
    //         shop: []
    //     };
    // }

    render() {
        //console.log("oooooooooo" + JSON.stringify(this.props));
        const { shop, num } = this.props;

        return (
            <div key={"shopb" + num} className="d-flex">
                <div key={"name" + num} className="bg-light">
                    {shop.name}
                </div>
                <div key={"addr" + num}>Address:{shop.addr}</div>
                <div key={"ph" + num}>Landline:{shop.phone}</div>
                <br />
                <br />
            </div>
        );
    }
}
