import React, { useState } from "react";

const IterationSample = () => {
  //const names = ["눈사람", "얼음", "눈", "바람"];
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setinputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setinputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      //concat은 push와 다르게 기존 배열에 변경을 가하지 않고 새로운 배열을 만듬
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1을 더해줌
    setNames(nextNames); //names 값을 update 함
    setinputText(""); //inputText를 비움
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name, index) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
