import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import D3Example from '../components/D3Example';
import ToolBar from '../components/ToolBar';


class MainPageContainer extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <NavBar/>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <div class="mdl-grid">
                            <div class="mdl-cell mdl-cell--10-col">
                                <D3Example addNode={this.props.addNode} />
                            </div>
                            <div class="mdl-cell mdl-cell--2-col">
                                <ToolBar addNode={this.props.addNode} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}


export default MainPageContainer;
