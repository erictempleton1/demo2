import React, { Component } from 'react';
import NavBar from '../components/navbar/NavBar';
import Canvas from '../components/canvas/Canvas';
import ToolBar from '../components/toolbar/ToolBar';


class MainPageContainer extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <NavBar/>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <div class="mdl-grid">
                            <div class="mdl-cell mdl-cell--10-col">
                                <Canvas addNode={this.props.addNode} />
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
