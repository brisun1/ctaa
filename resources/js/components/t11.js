import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
class T11 extends Component {
    state = {};
    render() {
        if (1 == 1) return <Redirect to="/t22" />;
        else {
            return (
                <div>
                    <div>loading ...</div>;
                    <T11 />
                </div>
            );
        }
    }
}

export default T11;
