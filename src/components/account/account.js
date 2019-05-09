import React, { Component } from 'react';

class Account extends Component {

    renderContent() {
        return <h1>Content</h1>
    }

    render() {
        return(
            <div className='account'>
                {
                    this.renderContent()
                }
            </div>
        )
    }
}

export default Account;