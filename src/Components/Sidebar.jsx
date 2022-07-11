import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
  HStack,
  Center,
  Badge,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import EthersSvg from "../Assets/ethers.svg";
import OpenseaSvg from "../Assets/opensea2.svg";
import TwitterSvg from "../Assets/twitter.svg";

function Sidebar() {
  const [address, setAddress] = useState("");

  const handleLogin = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      await provider.send("eth_requestAccounts", []);
      console.log(provider, "provider");
    } catch (error) {
      console.log(error, "ini error");
    }
  };

  const getWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const myAddress = await provider.getSigner().getAddress();
    if (myAddress) {
      setAddress(myAddress);
    }
  };

  useEffect(() => {
    getWallet();

    return () => {};
  }, []);
  
  return (
    <Box>
      <Box mt={8} mb={8}>
        <Heading
          textAlign="center"
          fontFamily={"Goudy Stout"}
          fontSize={"22.5px"}
          color="black"
        >
          Brokezuki.
        </Heading>
      </Box>
      <Box mt={"4em"}>
        <Stack>
          <Center>
            <Text 
            fontWeight="bold" 
            fontSize={14} 
            color='black'
            fontFamily='Goudy Stout'
            align='center'
            >
            2 Free Mint
            </Text>
          </Center>
          <Center>
            <Text
            fontWeight='bold'
            fontSize={15}
            color='black'
            align='center'
            fontFamily='Goudy Stout'
            >
            0.0069
            <Text>Additional</Text>
            </Text>
          </Center>
          <Center>
            <Text 
            fontWeight="bold" 
            fontSize={15} 
            color={"black"}
            fontFamily='Goudy Stout'
            >
            4444 Max Supply
            </Text>
          </Center>
          <Center>
            <Text
            fontWeight="bold"
            fontSize={15}
            color={"black"}
            align={"center"}
            fontFamily='Goudy Stout'
            >
            MAX5 Per
            <Text>Transactions</Text>
            </Text>
          </Center>
          <Center>
            <Text
            fontWeight="bold"
            fontSize={15}
            color={"black"}
            align={"center"}
            fontFamily='Goudy Stout'
            >
            Max 10 Mint
            <Text>Nfts Per Wallet</Text>
            </Text>
          </Center>
        </Stack>
      </Box>
      <Box>
        <Center>
          <HStack mt={"5em"} spacing={4}>
            <Button colorScheme="twitter" variant="ghost" size="md">
              <Icon boxSixe={"20px"} color={"black"} as={FaTwitter} />
            </Button>
            <Button colorScheme="teal" size="md" variant={"ghost"}>
              <Image
                boxSize="20px"
                objectFit="cover"
                src={EthersSvg}
                alt="ethers"
              />
            </Button>
            <Button variant="ghost" colorScheme="teal" size="md">
              <Image
                boxSize="20px"
                objectFit="cover"
                src={OpenseaSvg}
                alt="ethers"
              />
            </Button>
          </HStack>
        </Center>
      </Box>
      <Box mt={"5em"} textAlign={"center"}>
        <Text
          fontFamily={"Monospace"}
          color={"black"}
          textAlign={"center"}
          fontSize={20}
          fontWeight="bold"
        >
          Connect Your Wallet
        </Text>
        <Button
          onClick={() => handleLogin()}
          colorScheme="teal"
          variant="outline"
        >
          Wallet
        </Button>
      </Box>
      <Box align="center" fontWeight="bold">
        {address}
      </Box>
    </Box>
  );
}

export default Sidebar;
