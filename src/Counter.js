import React, { Component } from "react";
import { ThemeContext } from "./App";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }
  render() {
    console.log("render counter");
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
  changeCount(amout) {
    this.setState((prevState) => {
      return { count: prevState.count + amout };
    });
  }
}

export default Counter;
