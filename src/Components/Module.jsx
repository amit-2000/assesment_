import React from 'react';
import { Box, Divider, Image, Text } from '@chakra-ui/react';

const Module = () => {
  return (
    <Box
      display={{ base: 'inline-block', lg: 'flex' }}
      width="100%"
      m={'0 auto'}
      p={0}
    >
      <Box width={{ base: '100%', lg: '60%' }} height={'90vh'} m={'20px auto'}>
        <Image
          borderRadius={10}
          fit={'cover'}
          boxSize={'100%'}
          src="https://images.unsplash.com/photo-1644620990884-0e6e8743f71a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        ></Image>
      </Box>
      <Box
        width={{ base: '90vw', lg: '40%' }}
        height={'80vh'}
        pos={{ base: 'absolute', lg: 'relative' }}
        top={{ base: 6 }}
        display={{ base: 'flex' }}
        alignItems={{ base: 'center' }}
        justifyContent={{ base: 'center' }}
      >
        <Box width={'300px'} textAlign={{ base: 'center', lg: 'left' }}>
          <Box cursor={'pointer'}>
            <Text>Module One</Text>
            <Divider />
          </Box>
          <Box cursor={'pointer'}>
            <Text>Module Two</Text>
            <Divider />
          </Box>
          <Box cursor={'pointer'}>
            <Text>Module Three</Text>
            <Divider />
          </Box>
          <Box cursor={'pointer'}>
            <Text>Module Four</Text>
            <Divider />
          </Box>
          <Box cursor={'pointer'}>
            <Text>Module Five</Text>
            <Divider />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Module;
