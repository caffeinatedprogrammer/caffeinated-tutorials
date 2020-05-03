import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Welcome from "./Welcome";
import TutorialPage from "./TutorialPage";

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route>
                <Route path="/tutorials/:name">
                    <TutorialPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));