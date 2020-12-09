import React, { Component } from 'react';

class ModalContent extends Component {
    render() { 
        const {children} = this.props;
        return ( 
            <div className="content">
                {children}
            </div>
         );
    }
}
 
export default ModalContent;