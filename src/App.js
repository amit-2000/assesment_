import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import Home from './Components/Home';
import Module from './Components/Module';
function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      {/* <Home /> */}
      <Module />
    </ChakraProvider>
  );
}

export default App;
