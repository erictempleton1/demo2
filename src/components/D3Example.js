import { Component } from 'react';
import ReactFauxDOM from 'react-faux-dom';
import { connect } from 'react-redux';
import { addNode, getNodes } from './../store/topology/actions';
import * as d3 from 'd3';


const mapDispatchToProps = dispatch => {
  return {
    addNode: node => dispatch(addNode(node)),
    getNodes: () => dispatch(getNodes()),
  };
};

const mapStateToProps = state => {
  return { nodes: state.nodes };
};

class D3ExampleComp extends Component {

  constructor() {
    super()
    this.state = {
      nodes: [
        // { id: 0, x: 50, y: 200, icon: 'ic_videocam_black_48px.svg' },
        // { id: 1, x: 200, y: 200, icon: 'ic_videocam_black_48px.svg' },
        // { id: 2, x: 300, y: 300, icon: 'ic_videocam_black_48px.svg' },
      ],
    }
    this.click = this.click.bind(this);
    this.drag = this.drag.bind(this);
  }

  click() {
    // create a copy of the state and newNode object
    let newStateData = this.state.nodes.slice();
    let newNode = {
      x: d3.event.clientX + 5,
      y: d3.event.clientY - 50,
      icon: 'ic_videocam_black_48px.svg'
    };

    // create an array of ids from the array of node objects
    let result = newStateData.map(nodeObj => nodeObj.id);
    if (result.length > 0) {
      // calculate the max id in the array and increment for next id
      newNode.id = Math.max.apply(Math, result) + 1;
    } else {
      // no nodes on canvas yet
      newNode.id = 0;
    }
    
    // add new node object to the copy
    newStateData.push(newNode);
    this.props.addNode({id: newNode.id, x:100, y: 100});
    console.log(this.props)

    // update the state data with the copied data
    this.setState({nodes: newStateData});
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
      .attr("width", 700)
      .attr("height", 400)
      .style("background-color", '#F6F6F6')
      .on('click', this.click);
    
    svg.selectAll("svg:image")
    .data(this.state.nodes)
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

const D3Example = connect(mapStateToProps, mapDispatchToProps)(D3ExampleComp);
export default D3Example;
