import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text } from '@chakra-ui/react';
import data from '../Data/data';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdHome } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';
const ModuleTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { id } = useParams();
  const ModuleTabList = data[id - 1];
  console.log(typeof id);
  return (
    <Box>
      <Box
        textAlign={'right'}
        mr={{ base: 2, lg: 8 }}
        mt={5}
        cursor="pointer"
        position={'relative'}
        zIndex={200}
        display="flex"
        justifyContent={'flex-end'}
      >
        <Box mt={3}>
          <IconContext.Provider value={{ size: '3.2em', color: 'gray' }}>
            <BiSearchAlt2 />
          </IconContext.Provider>
        </Box>
        <Link to="/modules">
          <IconContext.Provider value={{ size: '2.2em', color: 'gray' }}>
            <MdHome />
          </IconContext.Provider>
        </Link>
      </Box>
      <Text
        as={'h1'}
        fontWeight={400}
        color="#FFF"
        w={{ base: '100%', lg: '87%' }}
        m={'0 auto'}
        mb="5"
      >
        Module {parseInt(id)}
      </Text>
      <Box
        bg="#fff"
        display={'flex'}
        justifyContent="center"
        alignItems={'center'}
        flexDir="column"
        w={{ base: '100%', lg: '87%' }}
        m={'0 auto'}
      >
        <Box
          display={'flex'}
          justifyContent="space-around"
          w="100%"
          color="gray"
          borderBottom={'3px solid gray'}
        >
          {ModuleTabList.map((tab, tab_index) => {
            return (
              <Box
                p={{ base: 0, lg: 3 }}
                m={'0 2px 0 0'}
                mb="-.5px"
                mr={tab_index === 2 ? '0px' : '2px'}
                bg={currentTab === tab_index ? '#FFF' : 'blue.100'}
                color={currentTab === tab_index ? 'blue' : 'gray'}
                onClick={() => setCurrentTab(tab_index)}
                w="100%"
                textAlign={'center'}
                cursor="pointer"
              >
                <Text as="h4">Tab {tab_index + 1}</Text>
              </Box>
            );
          })}
        </Box>
        <Box
          color="black"
          display={'flex'}
          flexDir={{ base: 'column', lg: 'row' }}
          mt={0}
          p={{ base: 2, lg: 7 }}
        >
          <Image
            src={ModuleTabList[currentTab].img}
            fit={'cover'}
            boxSize={{ base: '100%', lg: '50%' }}
          ></Image>
          <Box ml={4}>
            <Text as={'h3'}>{ModuleTabList[currentTab].name}</Text>
            <Text lineHeight={{ base: '170%', lg: '200%' }}>
              {ModuleTabList[currentTab].discription}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModuleTabs;
