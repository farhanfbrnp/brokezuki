import React from "react";
import "./App.css";
import MainPages from "./Pages/MainPages";
import { Box } from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
     
      <Box>
        <MainPages />
      </Box>
  )
}

export default App;


//  {/* <AppBar />
//       <AppWallet />
//       <AppFooter /> */}
