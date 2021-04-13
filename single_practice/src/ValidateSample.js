import React, { Component } from "react";
import "./ValidateSample.css";

// ==== 5.1 ref를 사용하지 않고 state를 사용하기 === //
class ValidateSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });

    this.inputpw.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          ref={(ref) => this.inputpw=ref }
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ""}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidateSample;

