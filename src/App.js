import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Module from './Components/Module';
import ModuleTabs from './Components/ModuleTabs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './Components/Search';

function App() {
  return (
    <ChakraProvider resetCSS={false}>
      <Router>
        <Routes>
          <Route path="/" element={<Module mode={'home'} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/module" element={<Module mode={'module'} />} />
          <Route path="/module/:module" element={<ModuleTabs />} />
          <Route path="/module/:module/tab/:tab" element={<ModuleTabs />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
