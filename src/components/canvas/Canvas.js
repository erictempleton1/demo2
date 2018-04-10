import { Component } from 'react';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { addNode } from './../../store/topology/actions';


const mapDispatchToProps = dispatch => ({
  addNode: node => dispatch(addNode(node)),
});

const mapStateToProps = state => ({
  nodes: state.topologyReducer.nodes,
  activeNodeIcon: state.toolbarReducer.activeNodeIcon,
});


class CanvasComponent extends Component {

  constructor() {
    super();
    this.click = this.click.bind(this);
    this.drag = this.drag.bind(this);
  }

  click() {
    let newNode = {
      x: d3.event.clientX + 5,
      y: d3.event.clientY - 50,
      icon: this.props.activeNodeIcon
    };

    // create an array of ids from the array of node objects
    let result = this.props.nodes.map(nodeObj => nodeObj.id);
    if (result.length > 0) {
      // calculate the max id in the array and increment for next id
      newNode.id = Math.max.apply(Math, result) + 1;
    } else {
      // no nodes on canvas yet
      newNode.id = 0;
    }
    
    // add new node object to redux storage
    this.props.addNode(newNode);
  }

  drag(d, i) {
    // get the node and coordinates
    let selectedNode = d3.selectAll('image').nodes()[i];
    let coords = d3.mouse(selectedNode);

    // update the coordinates on drag
    d3.select(selectedNode)
    .attr("x", d.x = coords[0])
    .attr("y", d.y = coords[1]);

    // todo - update state (probably on end drag) or use redux and update
  }
  
  drawChart() {
    let el = ReactFauxDOM.createElement('div');

    let svg = d3.select(el)
      .append("svg")
      .attr("width", "100%")
      .attr("height", 800)
      .style("background-color", '#F6F6F6')
      .on('click', this.click);
    
    svg.selectAll("svg:image")
    .data(this.props.nodes)
    .enter()
    .append("svg:image")
    .attr("xlink:href", function(d) { return d.icon })
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
      .call(d3.drag()
      .on('drag', this.drag)
    );

    return el.toReact()
  }

  render() {
    return this.drawChart();
  }
}


const Canvas = connect(
  mapStateToProps, 
  mapDispatchToProps
)(CanvasComponent);

export default Canvas;
