import React from "react";

export default class Archives extends React.Component {
    render() {
        const { query } = this.props.location;
        const { params } = this.props;
        const { article } = params;
        const { date, filter } = query;
        return (
            <div>
                <h2>Archives {this.props.params.article}</h2>
                <h3>Date: {date}, filter: {filter}</h3>
            </div>

        );
    }
}