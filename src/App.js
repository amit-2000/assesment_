import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import Home from './Components/Home';
import Module from './Components/Module';
import ModuleTabs from './Components/ModuleTabs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Module mode={'home'} />} />
          <Route path="/modules" element={<Module mode={'module'} />} />
          <Route path="/module/:id" element={<ModuleTabs />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
