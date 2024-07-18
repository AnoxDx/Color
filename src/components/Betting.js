import React, { useState } from 'react';
import styled from 'styled-components';

const Betting = () => {
  const [betColor, setBetColor] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle betting logic here
  };

  return (
    <Container>
      <h1>Place Your Bet</h1>
      <Form onSubmit={handleSubmit}>
        <Select value={betColor} onChange={(e) => setBetColor(e.target.value)}>
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </Select>
        <Input 
          type="number" 
          placeholder="Bet Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <Button type="submit">Bet</Button>
      </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Select = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Betting;
