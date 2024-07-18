import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <h1>Welcome to ColorBet</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default Home;
