import React, { Children, cloneElement, Component } from 'react';

import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';

class Modal extends Component {

    static Header = ModalHeader;
    static Content = ModalContent;
    static Footer = ModalFooter;

    state = { 
        isOpen: true,
     }

     toggle = (event) => {
        const clikedElementClass = [...event.target.classList];
        const elementClass = clikedElementClass.shift();

        if(elementClass === 'header' || elementClass === 'content' || elementClass === 'footer' || elementClass === 'btn') {
            return
        } else {
            this.setState({
                isOpen: !this.state.isOpen,
             });
        }
         
     }
    render() { 
        const {isOpen} = this.state;
        const children = Children.map(this.props.children, child => cloneElement(child, {isOpen, toggle: this.toggle}));
        return ( 
            <div onClick={this.toggle} className="modal-wrapper">
               {isOpen &&  <div className="modal">{children}</div>}
            </div>
         );
    }
}
 
export default Modal;