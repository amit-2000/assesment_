import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IconContext } from 'react-icons';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

import data from '../Data/data';
const Module = ({ mode }) => {
  console.log(mode);
  return (
    <Box>
      <Box
        textAlign={'right'}
        mr={8}
        mt={5}
        cursor="pointer"
        position={'relative'}
        zIndex={200}
      >
        <Link to={mode === 'module' ? '/' : ''}>
          <IconContext.Provider value={{ size: '2.2em', color: 'gray' }}>
            <MdHome />
          </IconContext.Provider>
        </Link>
      </Box>
      <Box display={{ base: 'inline-block', lg: 'flex' }} width="100%" p={0}>
        <Box
          width={{ base: '100%', lg: '60%' }}
          height={'90vh'}
          mt={-10}
          opacity={{ base: 0.6, lg: 1 }}
        >
          <Image
            borderRadius={10}
            fit={'cover'}
            boxSize={'100%'}
            src="https://images.unsplash.com/photo-1644620990884-0e6e8743f71a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          ></Image>
        </Box>
        <Box
          width={{ base: '95%', lg: '40%' }}
          height={'80vh'}
          pos={{ base: 'absolute', lg: 'relative' }}
          top={{ base: 6 }}
          display={{ base: 'flex' }}
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'center' }}
        >
          {mode === 'module' ? (
            <Box
              width={'300px'}
              textAlign={{ base: 'center', lg: 'left' }}
              color="blue.500"
              fontWeight={600}
            >
              {data.map((item, idx) => {
                return (
                  <Box
                    id={idx}
                    cursor={'pointer'}
                    borderBottom={'2px solid #b3b4b5'}
                  >
                    <Link to={`/module/${idx + 1}`}>
                      <Text>Module {idx + 1}</Text>
                    </Link>
                  </Box>
                );
              })}

              <Button
                borderRadius={'full'}
                mt={20}
                colorScheme="facebook"
                variant="solid"
                p={5}
                w={'100%'}
                cursor="pointer"
              >
                Select Module
                {<ChevronRightIcon ml={'10px'} boxSize={'20px'} />}
              </Button>
            </Box>
          ) : (
            <Box width={'400px'}>
              <Text as="h1">Enter into the Modules</Text>
              <Text>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as text commonly used to demonstrate the visual form
                of a document or a typeface without relying on meaningful
                content. Lorem ipsum may be used as a placeholder before final
                copy is available.
              </Text>
              <Link to={`/modules`} textDecoration="none">
                <Button
                  borderRadius={'full'}
                  mt={20}
                  colorScheme="facebook"
                  variant="solid"
                  p={5}
                  w={'100%'}
                  cursor="pointer"
                >
                  Select Module
                  {<ChevronRightIcon ml={'10px'} boxSize={'20px'} />}
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Module;
