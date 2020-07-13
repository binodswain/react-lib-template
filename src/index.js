import React, { PureComponent } from "react";
// import PropTypes from "prop-types";

import "./styles.scss";

class RootComponent extends PureComponent {
    static propTypes = {};

    render() {
        return <div className="app">Hello from react-lib-template</div>;
    }
}

export default RootComponent;
