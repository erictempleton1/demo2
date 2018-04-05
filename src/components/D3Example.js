import React, { Component } from 'react';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';


class D3Example extends Component {
  drawChart() {
    // Create your element.
    var el = ReactFauxDOM.createElement('div')

    // Change stuff using actual DOM functions.
    // Even perform CSS selections!
    var rectDemo = d3.select(el).
        append("svg:svg").
        attr("width", 400).
        attr("height", 300);
    
    rectDemo.append("svg:rect").
        attr("x", 100).
        attr("y", 100).
        attr("height", 100).
        attr("width", 200);

    // Render it to React elements.
    return el.toReact()
  }

  render() {
    return this.drawChart();
  }
}

export default D3Example;
