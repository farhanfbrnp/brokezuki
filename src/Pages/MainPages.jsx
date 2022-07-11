import { Box } from '@chakra-ui/react';
import MainBar from '../Components/MainBar';
import Sidebar from '../Components/Sidebar';
import React from 'react';
// import AppBarTop from '../Components/AppBars/AppBarTop';

import AppFooter from '../Components/AppFooter'
const MainPages = () => {

  return (
    <>
    <Box display = 'flex' flexDirection='row'>
      {/* for sidebar */}
      <Box width ='20%' bgColor='gray.300'> 
        <Sidebar />
      </Box>
      <Box width ='80%'>
         {/* // Main Bar */}
        <MainBar />
      </Box>
    </Box>
    </>
  )
}

export default MainPages;