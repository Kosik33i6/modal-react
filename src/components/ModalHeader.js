import React, { Component } from 'react';

class ModalHeader extends Component {
    state = {
        isClosed: false,
    }
    toggle = () => {
        this.setState({
            isClosed: true,
        });
    }

    render() { 
        const {title} = this.props;
        return ( 
            <>
                {!this.state.isClosed && 
                <div className="header">
                    {title}
                    <div className="btn-box"><button className="btn" onClick={this.toggle}>X</button></div>
                </div>}
            </>
         );
    }
}
 
export default ModalHeader;