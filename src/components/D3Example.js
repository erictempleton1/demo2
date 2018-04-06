import { Component } from 'react';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';


class D3Example extends Component {

  constructor() {
    super()
    this.state = {
      nodes: [],
    }
    this.click = this.click.bind(this);
  }

  click() {
    // create a copy of the state and newNode object
    let newStateData = this.state.nodes.slice();
    let newNode = {
      x: d3.event.clientX + 5,
      y: d3.event.clientY - 50
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

    // update the state data with the copied data
    this.setState({nodes: newStateData});
  }
  
  dragStart(d) {
    console.log('drag start');
    d3.select(this).raise().classed("active", true);
  }

  dragged(d) {
    console.log(d.id);
    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
  }

  dragEnd(d) {
    d3.select(this).classed("active", false);
  }
  
  drawChart() {
    let el = ReactFauxDOM.createElement('div');
    let radius = 30;

    // create random colors based on the scheme
    let color = d3.scaleOrdinal().range(d3.schemeDark2);

    let svg = d3.select(el)
      .append("svg")
      .attr("width", 700)
      .attr("height", 400)
      .style("background-color", '#F6F6F6')
      .on('click', this.click);
    
    svg.selectAll("circle")
    .data(this.state.nodes)
    .enter().append("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", radius)
    .style("fill", function(d, i) { return color(i); })
    .call(d3.drag()
        .on("start", this.dragStart)
        .on("drag", this.dragged)
        .on("end", this.dragEnd)
    );

    return el.toReact()
  }

  render() {
    return this.drawChart();
  }
}

export default D3Example;
