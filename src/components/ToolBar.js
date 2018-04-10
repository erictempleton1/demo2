import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNode } from '../store/topology/actions';


const mapDispatchToProps = dispact => ({
  addNode: node => dispact(addNode(node)),
});

const mapStateToProps = state => ({
  nodes: state.topologyReducer.nodes,
})

class ToolbarComponent extends Component {
  render() {
    return (
      <div class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__supporting-text">
          <img src="ic_videocam_black_48px.svg"/>
          <img src="ic_router_black_48px.svg"/>
          <img src="ic_computer_black_48px.svg"/>
        </div>
      </div>
    )
  }
}

const ToolBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarComponent);

export default ToolBar;
