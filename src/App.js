import React, { useState } from "react";
import UserOutput from "./components/UserOutput";
import UserInput from "./components/UserInput";
import styled from "styled-components";

const AppContainer = styled.main`
  background-image: linear-gradient(
    to right bottom,
    #f7c8c8,
    #f5d4bc,
    #e4e3c0,
    #cff0d6,
    #c3f9f6
  );
  width: 50vw;
  border-top-right-radius: 10rem;
  box-shadow: 26px 32px 47px -15px rgba(0, 0, 0, 0.22);
  text-align: center;
  padding: 2rem 0;
`;

const ChangeButton = styled.button`
  margin: 2rem 0;
  padding: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 2rem;
`;
function App() {
  const [personState, setPersonState] = useState({
    persons: [
      {
        userName: "Alice",
      },
      {
        userName: "Bob",
      },
      {
        userName: "Cooper",
      },
    ],
  });
  const nameChangeButtonHandler = () => {
    setPersonState({
      persons: [
        {
          userName: "Dane",
        },
        {
          userName: "Enstein",
        },
        {
          userName: "Fiona",
        },
      ],
    });
  };
  const nameChangeInputHandler = (e) => {
    const newUserName = e.target.value;
    setPersonState({
      persons: [
        {
          userName: newUserName,
        },
        {
          userName: "Enstein",
        },
        {
          userName: "Fiona",
        },
      ],
    });
  };
  return (
    <AppContainer>
      {" "}
      <ChangeButton onClick={nameChangeButtonHandler}>
        {" "}
        Change User names on click{" "}
      </ChangeButton>{" "}
      <UserInput changeUserName={nameChangeInputHandler} />{" "}
      <section>
        {" "}
        <UserOutput userName={personState.persons[0].userName} />{" "}
        <UserOutput userName={personState.persons[1].userName} />{" "}
        <UserOutput userName={personState.persons[2].userName} />{" "}
      </section>{" "}
    </AppContainer>
  );
}

export default App;

// The instructions are:
// + Create TWO new components: UserInput and UserOutput
// + UserInput should hold an input element, UserOutput two paragraphs
// + Output multiple UserOutput components in the App component (any paragraph texts of your choice)
// + Pass a username (of your choice) to UserOutput via props and display it there
// + Add state to the App component (=> the username) and pass the username to the UserOutput component
// + Add a method to manipulate the state (=> an event-handler method)
// + Pass the event-handler method reference to the UserInput component and bind it to the input-change event
// + Ensure that the new input entered by the user overwrites the old username passed to UserOutput
// + Add two-way-binding to your input (in UserInput) to also display the starting username
// + Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
