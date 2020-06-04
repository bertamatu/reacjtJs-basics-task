import React from "react";
import styled from "styled-components";

const InputContainer = styled.section`
  width: 30vw;
  padding: 3rem;
`;

const UserInput = (props) => {
  return (
    <InputContainer>
      <label>New user name:</label>
      <input
        type="text"
        placeholder="..."
        onChange={props.changeUserName}
        value={props.userName}
      />
    </InputContainer>
  );
};

export default UserInput;
