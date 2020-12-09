import React, { Component } from 'react';

class ModalFooter extends Component {
    state = {
        isClosed: false,
    }
    toggle = (event, text) => {
        this.setState({
            isClosed: true,
        });
        console.log(event.target.textContent);
        const btnInnerText = event.target.textContent;
        if(btnInnerText === text) {
            alert("OK");
        }
    }
    render() { 
        const {callToActionLabel} = this.props;
        return ( 
            <>  
                {!this.state.isClosed &&
                <div className="footer">
                    <div className="btn-box">
                        <button onClick={(event) => this.toggle(event)} className="btn">Cancel</button>
                        <button onClick={(event) => this.toggle(event, callToActionLabel)} className="btn">{callToActionLabel}</button>
                    </div>
                </div>}
            </>
         );
    }
}
 
export default ModalFooter;