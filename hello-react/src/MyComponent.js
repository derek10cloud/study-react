import React, { Component } from "react";
import PropTypes from "prop-types";

// const MyCompnent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {name} 입니다. <br />
//       children 값은 {children}
//       입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// function 대신에 () => {}를 사용하여 함수를 만들었음
// function을 아예 대체하지는 않음. 사용 용도가 다른데, 주로 함수를 파라미터로 전달할 때 유용함

class MyCompnent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.prorps; //비구조화 할당
    return (
      <div>
        안녕하세요 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}
      </div>
    );
  }
}

MyCompnent.defaultProps = {
  name: "기본 이름",
  children: "리웩트",
};

MyCompnent.propType = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
}; //propTypes를 통해 props 검증

export default MyCompnent;
//다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정함
