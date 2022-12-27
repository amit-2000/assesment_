import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import data from '../Data/data';

const ModuleTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { id } = useParams();
  const ModuleTabList = data[id - 1];
  console.log(typeof id);
  return (
    <Box>
      <Text as="h2" color="Blue">
        Module {parseInt(id)}
      </Text>
      <Box
        bg="#fff"
        display={'flex'}
        justifyContent="center"
        alignItems={'center'}
        flexDir="column"
        w={'87%'}
        m={'0 auto'}
      >
        <Box
          display={'flex'}
          justifyContent="space-around"
          w="100%"
          color="gray"
          borderBottom={'3px solid gray'}
        >
          {ModuleTabList.map((tab, idx) => {
            return (
              <Box
                p={3}
                m={'0 2px 0 0'}
                mb="-.5px"
                mr={idx === 2 ? '0px' : '2px'}
                bg={currentTab === idx ? '#FFF' : 'blue.100'}
                color={currentTab === idx ? 'blue' : 'gray'}
                onClick={() => setCurrentTab(idx)}
                w="100%"
                textAlign={'center'}
                cursor="pointer"
              >
                <Text as="h3">Tab {idx + 1}</Text>
              </Box>
            );
          })}
        </Box>
        <Box color="black" display={'flex'} mt={5} p={7}>
          <Image
            src={ModuleTabList[currentTab].img}
            fit={'cover'}
            boxSize={'50%'}
          ></Image>
          <Box ml={5}>
            <Text as={'h3'}>{ModuleTabList[currentTab].name}</Text>
            <Text lineHeight="200%">
              {ModuleTabList[currentTab].discription}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModuleTabs;
