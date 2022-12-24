import React from 'react';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
// import Home from './Components/Home';
import Module from './Components/Module';
function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      {/* <Home /> */}
      <Box >
        <Module />
      </Box>
    </ChakraProvider>
  );
}

export default App;
