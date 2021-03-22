import React from 'react';

import '../Carta.css';

class FrontCard extends React.Component {
    render() {
        return (
            <div className="portrait" onClick={this.props.handleClick}></div>
        );
    }
};

export default FrontCard;