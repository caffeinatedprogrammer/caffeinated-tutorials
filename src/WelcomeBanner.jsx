import React, { useCallback } from "react";

import { useHistory } from "react-router-dom";

import "./WelcomeBanner.css";

const WelcomeBanner = () => {
    const history = useHistory();
    const onClick = useCallback((event) => {
        event.preventDefault();
        history.push("/");
    }, [history]);
    return (
        <a onClick={onClick} className="banner">
            Caffeinated Tutorials
        </a>
    )
}

export default WelcomeBanner;