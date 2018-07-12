import React, { Component } from 'react';
import { Graph } from './graph';
import './App.css';

// !!! IMPLEMENT ME
 const canvasWidth = 1000;
 const canvasHeight = 900;

/**
 * GraphView
 */
class GraphView extends Component {
  /**
   * On mount
   */
  componentDidMount() {
    this.updateCanvas();
  }

  /**
   * On state update
   */
  componentDidUpdate() {
    this.updateCanvas();
  }

  /**
   * Render the canvas
   */
  updateCanvas() {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');

    // Create gradient
    // let grd = ctx.createLinearGradient(0, 0, 200, 0);
    // grd.addColorStop(0, "blue");
    // grd.addColorStop(1, "yellow");

    // call our dummy function
    //console.log(`this.props.graph:`, this.props.graph);
   //this.props.graph.createDummyGraph();

    // Clear it
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBasline = 'middle';

    // draw the lines between vertexes
    for(let vertex of this.props.graph.vertexes) {
      for (let edge of vertex.edges) {
        ctx.beginPath();
        ctx.moveTo(vertex.pos.x, vertex.pos.y);
        ctx.lineTo(edge.destination.pos.x, edge.destination.pos.y);
        ctx.stroke();
      }
    }

    for (let v of this.props.graph.vertexes) {
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(v.pos.x,v.pos.y, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      
      // fill in the text
      ctx.fillStyle = 'black';
      ctx.fillText(v.value, v.pos.x, v.pos.y);
    };
    // ctx.fillStyle = 'black';
    // ctx.fillRect(2,2,20, 20);

    // ctx.fillStyle = 'orange';
    // ctx.fillRect(20,2, 20, 20);

    // ctx.fillStyle = 'black';
    // ctx.fillRect(40,2,20, 20);
    
    // ctx.fillStyle = 'orange';
    // ctx.fillRect(60,2, 20, 20);

    // ctx.fillStyle = 'black';
    // ctx.fillRect(80,2, 20, 20);

    // ctx.fillStyle = 'orange';
    // ctx.fillRect(100,2, 20, 20);

    // ctx.fillStyle = 'black';
    // ctx.fillRect(120,2, 20, 20);

    // ctx.fillStyle = 'orange';
    // ctx.fillRect(140,2, 20, 20);

    // ctx.fillStyle = 'black';
    // ctx.fillRect(160,2, 20, 20);

    // ctx.fillStyle = 'orange';
    // ctx.fillRect(180,2, 20, 20);
    // ctx.fillStyle = grd;
    //ctx.fillRect(10, 10, 150, 80);

    // !!! IMPLEMENT ME
    // compute connected components
    // draw edges
    // draw verts
    // draw vert values (labels)
  }
  
  /**
   * Render
   */
  render() {

    
  return  <canvas ref="canvas" width={canvasWidth} height={canvasHeight}></canvas> 
    
  }
}


/**
 * App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: new Graph()
    };

    // !!! IMPLEMENT ME
    // use the graph randomize() method
    this.state.graph.randomize(5,4,150,0.6);
    this.state.graph.getConnectedComponents();
  }

  render() {
    return (
      <div className="App">
        <GraphView graph={this.state.graph}></GraphView>
      </div>
    );
  }
}

export default App;
