import React, { useState } from "react";

// class EventPractice extends Component {
//   state = {
//     username: "",
//     message: "",
//   };

//   //   constructor(props) {
//   //     super(props);
//   //     this.handleChange = this.handleChange.bind(this);
//   //     this.handleClick = this.handleClick.bind(this);
//   //   }

//   handleChange = (e) => {
//     this.setState({
//       //message: e.target.value,
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.name + ":" + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//           //   onChange={
//           //     (e) => {
//           //       this.setState({
//           //         message: e.target.value,
//           //       });
//           //     }
//           //     //console.log(e.target.value);
//           //   }
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해보렴"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button
//           onClick={this.handleClick}
//           //   onClick={() => {
//           //     alert(this.state.message);
//           //     this.setState({
//           //       message: "",
//           //     });
//           //   }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

const EventPractice = () => {
  //   const [username, setUsername] = useState("");
  //   const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMessage(e.target.value);
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
    // setUsername("");
    // setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        palceholder="사용자명"
        value={username}
        //onChange={onChangeUsername}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하렴"
        value={message}
        //onChange={onChangeMessage}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
