import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box>Hello There</Box>
      <Button colorScheme="red">A</Button>



    </ChakraProvider>
  );
}

export default App;
