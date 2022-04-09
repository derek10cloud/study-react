import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
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
      validated: this.state.password === "0000", // password가 0000일 경우에 validated true
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password} //password값을 state에 전달함
          onChange={this.handleChange} //이벤트가 발생하면, handleChange 호출
          className={
            this.state.clicked
              ? this.state.validated //this.state.clicked가 true일 경우에, this.state.validated 검증 -> 0000일 경우에만 success
                ? "success"
                : "failure"
              : "" //아래 버튼을 누르기 전까지는 비어 있는 문자열 전달
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
export default ValidationSample;
