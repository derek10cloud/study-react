//import logo from './logo.svg';
//import "./App.css";
//import MyCompnent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

/* 함수 component 
  function App() {
    const name = "리액트";
    return (
      <>
        <div className="react">{name}</div>
      </>
    );
  }
 
  //클래스 component 
  //클래스 component는 state 기능 및 라이프사이클 기능 사용 가능, 임의 메서드 정의 가능
  //클래스형 component에는 render함수가 꼭 있어야하고, 그 안에서 보여주어야 할 JSX를 반환해야 함

  class App extends Components {
    render() {
      const name = "react";
      return <div className="react">{name}</div>;
    }
  } 
  */

const App = () => {
  return <Say />;
};

export default App;
