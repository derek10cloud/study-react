import React, { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props); //constructor(생성자) 작성할 땐 super(props) 호출이 필요함
  //     //state 초깃값 설정하기
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; //state 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
            this.setState((prevState) => ({ number: prevState.number + 1 }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
