import React, { useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Select = () => {
  const [firSelectDrop, setFirSelectDrop] = useState(false);
  const [secSelectDrop, setSecSelectDrop] = useState(false);

  // 첫번째 drop창을 클릭시 true값으로 변환하고 두번째 drop창은 꺼지게.
  const toggleFirSelectDrop = () => {
    if (firSelectDrop) {
      setFirSelectDrop(false);
    } else {
      setFirSelectDrop(true);
      setSecSelectDrop(false);
    }
  };
  // 두번째 drop창을 클릭시 true값으로 변환하고 첫번째 drop창은 꺼지게.
  const toggleSecSelectDrop = () => {
    if (secSelectDrop) {
      setSecSelectDrop(false);
    } else {
      setSecSelectDrop(true);
      setFirSelectDrop(false);
    }
  };
  // 만약 dorp창이 열려있을때 바깥쪽을 클릭하면 창이 닫힌 기본값으로 설정
  const handleOutsideClick = () => {
    setFirSelectDrop(false);
    setSecSelectDrop(false);
  };

  // dorp창에 띄워져 있을 초기값
  const [selectTitle1, setSelectTitle1] = useState("리엑트");
  const [selectTitle2, setSelectTitle2] = useState("리엑트");

  // drop option
  const Languages = ["리액트", "자바", "스프링", "리액트 네이티브"];

  // 겉으로 보이는 name값으로, drop창에서 name 클릭시 클릭된 name이 기본값에 나타날수 있는 설정
  const checkSelectDrop = (name, dropIndex) => {
    if (dropIndex === 1) {
      setFirSelectDrop(false);
      setSelectTitle1(name);
    } else {
      setSecSelectDrop(false);
      setSelectTitle2(name);
    }
  };

  return (
    <>
      <SlectBox onClick={handleOutsideClick}>
        <h1>Select</h1>
        <div>
          {/* SelectBox의 이벤트로 하위 클릭이벤트가 전파되지않게하기위해 */}
          {/* 쉽게 말하자면 select박스의 온클릭 기능이 selectbar의 기능을 먹어버리는걸 중간에서 방지 */}
          {/* 드롭다운 내부를 클릭할 때만 이벤트가 처리되고, 드롭다운 외부를 클릭하면 드롭다운이 닫히지 않도록 하는 역할 */}
          <SelectDiv onClick={(e) => e.stopPropagation()}>
           
           <SelectBar onClick={toggleFirSelectDrop}>
              
              <FontAwesomeIcon icon={faFire} />
              &nbsp;{selectTitle1}&nbsp;
              
              <FontAwesomeIcon icon={faFire} />
            </SelectBar>
            
            <SelectBar onClick={toggleSecSelectDrop}>
              
              <FontAwesomeIcon icon={faFire} />
              &nbsp;{selectTitle2}&nbsp;
              <FontAwesomeIcon icon={faFire} />
            
            </SelectBar>
          
          </SelectDiv>
          
          <SelectDiv>
          {firSelectDrop && (
              <DropDiv1>
                {Languages.map((option) => (
                  <List onClick={() => checkSelectDrop(option, 1)}>
                    {option}
                  </List>
                ))}
              </DropDiv1>
            )}
            
            {secSelectDrop && (
              <DropDiv2>
                {Languages.map((option) => (
                  <List onClick={() => checkSelectDrop(option, 2)}>
                    {option}
                  </List>
                ))}
              </DropDiv2>
            )}
          </SelectDiv>
        </div>
      </SlectBox>
    </>
  );
};

export default Select;

const SlectBox = styled.div`
  border: 3px solid lightgray;
  height: 200px;
  margin: 40px 5px 5px 5px;
  padding: 3px;
  position: relative;
  overflow: hidden;
`;

const SelectDiv = styled.div`
  display: flex;
`;

const SelectBar = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 250px;
  height: 40px;
  margin-right: 10px;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const DropDiv1 = styled.ul`
  font-size: 12px;
  background-color: white;
  border: 1px solid #e8e8e8;
  width: 250px;
  border-radius: 15px;
  padding-left: 0;
  margin-right: 5px;
  left: 17px;
  top: 538px;
  position: fixed;
`;

const DropDiv2 = styled.ul`
  font-size: 12px;
  background-color: white;
  border: 1px solid #e8e8e8;
  width: 250px;
  border-radius: 15px;
  padding-left: 0;
  margin-right: 5px;
  left: 262px;
  top: 125px;
  position: absolute;
`;

const List = styled.div`
  height: 20px;
  padding: 10px 10px;
  border-radius: 15px;
  background-color: white;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;