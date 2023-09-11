import React, { useState } from "react";
import { ThirdButton } from "./Buttons";
import styled from "styled-components";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onPriceChange = (e) => {
    const newPrice = e.target.value.replace(/\D/g, "");
    if (newPrice === "") {
      //value 속성의 값에서 모든 숫자 이외의 문자를 제거한 문자열을 newPrice 변수에 할당
      setPrice("");
    } else {
      setPrice(parseInt(newPrice).toLocaleString()); // 한국어 로케일표시가되므로 3자리수별로 , 생성
    }
  };

  const sumButtonHandler = () => {
    if (name.length === 0 && price.length === 0) {
      return alert(`이름과 가격 모두 입력해주세요.`);
    }
    alert(`name : ${name}, price : ${String(price).replaceAll(",", "")}`);
    setName(""); // replaceAll(바꾸고싶은거, 이걸로) => 문자열에만 사용가능해서 String()
  };
  

  return (
    <>
      <h2>Input</h2>
      <InputBoxWrap>
        이름 : <MainInput onChange={onNameChange} value={name} />
        &nbsp; 가격 :{" "}
        <MainInput onChange={onPriceChange} value={price} placeholder="0" />
        &nbsp;
        <ThirdButton
          onClick={sumButtonHandler}
          back-color={"#55EFC4"}
          border-color={"#55EFC4"}
        >
          저장
        </ThirdButton>
      </InputBoxWrap>
    </>
  );
}
const InputBoxWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MainInput = styled.input`
  height: 30px;
  border: 1px solid black;
  border-radius: 8px;
`;

export default Input;
