import React, { Component } from "react";
class CallTest extends Component {
    state = {};
    componentDidMount() {
        console.log("in child didMount");
    }
    // axios.get("api/menu/show").then(res => {
    //     let sData = res.data;
    //     //console.log("whyres" + JSON.stringify(sData.data));
    //     let menu = sData.data;
    render() {
        console.log("test render");
        return <div>Tesr call</div>;
    }
}

export default CallTest;
