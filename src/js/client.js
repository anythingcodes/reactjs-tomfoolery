import React from "react"; // React engine separate from syntax
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./components/global/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured} />
            <Route path="archives(/:article)" component={Archives} />
            <Route path="settings" component={Settings} />
        </Route>
    </Router>, app
);