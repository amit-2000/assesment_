import React, { useState, useEffect, useRef } from 'react';
import { Box, Image, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { IconContext } from 'react-icons';
import data from '../Data/data';
const Search = () => {
  const [serachResults, setSearchResults] = useState([]);
  const [searchinput, setSearchinput] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    const getSearchResult = () => {
      const matchingStrings = data
        .flat()
        .filter(str =>
          str.title.match(
            new RegExp(searchinput?.length > 0 ? searchinput : null, 'i')
          )
        );

      setSearchResults(matchingStrings);
    };
    getSearchResult();
  }, [searchinput]);

  return (
    <Box height={'100vh'}>
      <Box
        textAlign={'right'}
        mr={{ base: 2, lg: 8 }}
        mt={5}
        position={'relative'}
        zIndex={200}
        display="flex"
        justifyContent={'flex-end'}
      >
        <Link style={{ textDecoration: 'none' }} to="/module" cursor="pointer">
          <IconContext.Provider value={{ size: '2.2em', color: 'gray' }}>
            <MdHome />
          </IconContext.Provider>
        </Link>
      </Box>
      <Box
        w={{ base: '100%', lg: '87%' }}
        display="flex"
        flexDir={'column'}
        m={'0 auto'}
        fontSize={'13px'}
        fontWeight="400"
      >
        <Text>Type here to Search</Text>
        <Box borderBottom={'3px solid gray'}>
          <Input
            variant="unstyled"
            background={'transparent'}
            placeholder="Enter Title..."
            border={'none'}
            fontSize="16px"
            p={1}
            ref={inputRef}
            onChange={e => setSearchinput(e.target.value)}
          />
        </Box>
        {serachResults.length > 0 ? (
          <Text>showing {serachResults?.length} results...</Text>
        ) : (
          ''
        )}
        {serachResults?.map(item => {
          return (
            <Box mt={4} bg="#FFF" p={5}>
              <Link
                style={{ textDecoration: 'none' }}
                to={`/module/${item.module_no}/tab/${item.tab}`}
              >
                <Box
                  display={'flex'}
                  flexDir={{ base: 'column', lg: 'row' }}
                  height={{ base: 'auto', lg: '150px' }}
                >
                  <Box flex={'0 0 30%'}>
                    <Image fit={'cover'} boxSize="100%" src={item.img}></Image>
                  </Box>
                  <Box flex={1} ml={3} color="blue.400">
                    <Text as="h3">{item.title}</Text>
                    <Text as={'span'} mt={1} color="gray.500">
                      {item.discription.substring(0, 209)}{' '}
                      <Text as={'span'} color="blue">
                        Read more...
                      </Text>
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Search;
