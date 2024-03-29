import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled  from "styled-components";
import Spinner from './spinner'
import "./styles.css";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: sans-serif;
`;

const FakeLoader = props => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setLoading(true), 1000);
    return () => clearTimeout(id);
  }, []);
  //
  return isLoading ? (
    props.children
  ) : (
    <>
      <Spinner />
      <p>{props.loadingText}</p>
    </>
  );
};

function App() {
  const [restartFlag, setRestartFlag] = useState(false);
  return (
    <Container key={restartFlag}>
      <FakeLoader loadingText="loading ...">
        <h1>Finally loaded!</h1>
        <button onClick={() => setRestartFlag(r => !r)}>See it again!</button>
      </FakeLoader>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
