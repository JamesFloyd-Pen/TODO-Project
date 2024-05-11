import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, ChakraProvider, Input } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('test name 3');

  const onChange = (event: any) => {
    setName(event.target.value);
  };

  const onClick = async () => {
    const response = await axios.post('http://localhost:3021/name', {
      name,
    });
    console.log("RESPONSE: ", response);
  };



  return (
    <ChakraProvider>
      <Box>Hello There</Box>
      <Input onChange={onChange} placeholder = "Type in name" />

      <Button colorScheme="red" onClick={onClick}>
        Test Button

      </Button>



    </ChakraProvider>
  );
}

export default App;
