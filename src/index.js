import React, { PureComponent } from "react";
// import PropTypes from "prop-types";

import "./styles.scss";

class RootComponent extends PureComponent {
    static propTypes = {};

    render() {
        return (
            <div className="app">
                <h1>👋 Hello from react-lib-template</h1>
            </div>
        );
    }
}

export default RootComponent;
