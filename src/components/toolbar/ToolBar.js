import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveNodeIcon } from '../../store/toolbar/actions';
import { SVG_FILES } from '../../constants/icons';
import './ToolBar.css';


const mapDispatchToProps = dispatch => ({
  setActiveNodeIcon: icon => dispatch(setActiveNodeIcon(icon)),
});

const mapStateToProps = state => ({
  activeNodeIcon: state.toolbarReducer
});

class ToolbarComponent extends Component {

  constructor() {
    super();
    this.svgFiles = SVG_FILES;
  }

  renderDeviceImages() {
    return Object.keys(this.svgFiles).map((key, index) => (
      <img 
        onClick={() => this.props.setActiveNodeIcon(this.svgFiles[key])}
        src={this.svgFiles[key]} />
    ));
  }

  render() {
    let deviceImages = this.renderDeviceImages();
    return (
      <div class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__supporting-text">
          { deviceImages }
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
