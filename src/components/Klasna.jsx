import React, { Component } from "react";

class Klasna extends Component {
  render() {
    return (
      <div>
        <h2>Klasna podkomponenta</h2>
        <p>Pozdrav iz klasne podkomponente!</p>
        <p>{this.props.stringPrimjer}</p>
      </div>
    );
  }
}

export default Klasna;
