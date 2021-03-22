import React from 'react';

import '../Carta.css';

class BackCard extends React.Component {
    render() {
        return (
            <div className="content" onClick={this.props.handleClick}>
                <i className={`fa ${this.props.icon} fa-5x`}></i>
            </div>
        );
    }
};

export default BackCard;