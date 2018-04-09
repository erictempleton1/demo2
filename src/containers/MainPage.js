import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import D3Example from '../components/D3Example';
import { connect } from 'react-redux';
import { addNode } from './../store/topology/actions';



const mapDispatchToProps = dispatch => ({
    addNode: node => dispatch(addNode(node)),
});


class MainPageContainer extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <NavBar/>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <D3Example 
                            addNode={this.props.addNode} 
                            loadTopology={this.props.loadTopology}/>
                    </div>
                </main>
            </div>
        )
    }
}

const MainPage = connect(null, mapDispatchToProps)(MainPageContainer);
export default MainPage;
