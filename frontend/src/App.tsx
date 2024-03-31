import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const onClick = async () => {
    const response = await axios.post('http://localhost:3021/name',{
      name: "James"
    });
    console.log("RESPONSE: ", response);


  };



  return (
    <ChakraProvider>
      <Box>Hello There</Box>
      <Button colorScheme="red" onClick={onClick}>
        Test Button

      </Button>



    </ChakraProvider>
  );
}

export default App;
