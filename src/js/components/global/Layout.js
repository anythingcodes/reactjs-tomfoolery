import React from "react";
import { Link } from "react-router";

import Footer from "./Footer";
import Nav from "./Header";

export default class Layout extends React.Component {
    render() {
        const { location } = this.props;
        
        return (
            <div>

                <Nav location={location} />

                <div class="container" id="layout">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>Ultra Awesome Articles</h1>
                            {this.props.children}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>

        );
    }
}