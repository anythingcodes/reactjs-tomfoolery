import React from "react"; // React engine separate from syntax
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import ToDos from "./pages/ToDos";
import Favorites from "./pages/Favorites";
import Layout from "./components/global/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={ToDos} />
            <Route path="favorites(/:article)" component={Favorites} />
            <Route path="settings" component={Settings} />
        </Route>
    </Router>, app
);