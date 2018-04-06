import React, { Component } from 'react';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';


class D3Example extends Component {

  click() {
    console.log("click!");
  }
  
  drawChart() {
    // Create your element.
    let el = ReactFauxDOM.createElement('div');

    // http://jsfiddle.net/da37B/820/

    let svg = d3.select(el)
      .append("svg")
      .attr("width", 700)
      .attr("height", 400)
      .on("click", this.click);

    // Add a background
    svg.append("rect")
      .attr("width", 700)
      .attr("height", 400)
      .style("stroke", "#999999")
      .style("fill", "#F6F6F6")

    // Change stuff using actual DOM functions.
    // Even perform CSS selections!
    // var rectDemo = d3.select(el).
    //     append("svg:svg").
    //     attr("width", 400).
    //     attr("height", 300);
    
    // rectDemo.append("svg:rect").
    //     attr("x", 100).
    //     attr("y", 100).
    //     attr("height", 100).
    //     attr("width", 200);

    // Render it to React elements.
    return el.toReact()
  }

  render() {
    return this.drawChart();
  }
}

export default D3Example;
