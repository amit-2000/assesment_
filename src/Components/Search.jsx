import React, { useState, useEffect, useRef } from 'react';
import { Box, Image, Input, Text } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { IconContext } from 'react-icons';
import data from '../Data/data';

const Search = () => {
  const [serachResults, setSearchResults] = useState([]);
  const [inputString, setInputString] = useState(null); //user input string.
  const [itemOffset, setItemOffset] = useState(0); //starting pos of result from res array.
  const [matchingStrings, setMatchingStrings] = useState([]); //all matched string results.
  const inputRef = useRef(null);

  // Get focus on input field._________________________________
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Find search results for inputed string form the database. and reset offset to 0 for new search._________________________________________
  useEffect(() => {
    let getSearchResult = () => {
      let resultArray = data
        .flat()
        .filter(str =>
          str.title.match(
            new RegExp(inputString?.length > 0 ? inputString : null, 'i')
          )
        );

      setMatchingStrings(resultArray);

      setItemOffset(0);
    };
    getSearchResult();
  }, [inputString]);
  //__________________________________________________________________________________________
  // Pagination Logic Begins
  let itemsPerPage = 3;
  useEffect(() => {
    //get search result for single page.
    const getSliceOfResult = () => {
      const endOffset = itemOffset + itemsPerPage;
      const currentItems = matchingStrings.slice(itemOffset, endOffset);
      setSearchResults(currentItems);
    };

    getSliceOfResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, matchingStrings]);

  //Handle buttons of pagi._________________________________________
  const handlePageClick = (itemOffset, action) => {
    if (action === 'prev') {
      setItemOffset(itemOffset - 3);
    } else {
      setItemOffset(itemOffset + 3);
    }
  };

  return (
    <Box h={'auto'} minH={'100vh'} bg="#eee" p={2}>
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
        <Text color={'gray'}>Type here to Search</Text>
        <Box borderBottom={'3px solid gray'}>
          <Input
            color={'gray'}
            variant="unstyled"
            background={'transparent'}
            placeholder="Enter Title... eg. Morbi acru "
            border={'none'}
            fontSize="16px"
            p={1}
            ref={inputRef}
            onChange={e => setInputString(e.target.value)}
          />
        </Box>
        {serachResults.length > 0 ? (
          <Text mb={-2} color={'gray'}>
            showing {matchingStrings?.length} results...
          </Text>
        ) : (
          ''
        )}
        {inputString?.length > 0 && matchingStrings.length === 0 ? (
          <Text color={'gray'}>No result found</Text>
        ) : (
          ''
        )}
        {serachResults?.map(item => {
          return (
            <Box mt={3} bg="#FFF" p={5}>
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
                  <Box flex={1} ml={3} color="blue.700">
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
      {matchingStrings.length > 3 && (
        <Box textAlign={'right'} mt={4} mr={4}>
          <button
            style={{
              background: 'none',
              border: 'none',
            }}
            disabled={itemOffset > 1 ? false : true}
            onClick={() => handlePageClick(itemOffset, 'prev')}
          >
            {
              <ChevronLeftIcon
                cursor={'pointer'}
                ml={'10px'}
                boxSize={10}
                color={itemOffset > 1 ? 'blue.700' : 'gray'}
              />
            }
          </button>
          <button
            disabled={itemOffset < matchingStrings.length - 3 ? false : true}
            onClick={() => handlePageClick(itemOffset, 'next')}
            style={{
              background: 'none',
              border: 'none',
            }}
          >
            {
              <ChevronRightIcon
                cursor={'pointer'}
                ml={'10px'}
                color={
                  itemOffset < matchingStrings.length - 3 ? 'blue.700' : 'gray'
                }
                boxSize={10}
              />
            }
          </button>
        </Box>
      )}
    </Box>
  );
};

export default Search;
