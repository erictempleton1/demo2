import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import D3Example from '../components/D3Example';


class MainPageContainer extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <NavBar/>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <D3Example addNode={this.props.addNode} />
                    </div>
                </main>
            </div>
        )
    }
}


export default MainPageContainer;
