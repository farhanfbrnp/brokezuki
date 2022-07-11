import React from 'react';
import { Box, SimpleGrid, Center, Text } from '@chakra-ui/react';

const AppBar = () => {
    return (
        <Box py={3} backgroundColor={'gray.300'}>
        <SimpleGrid columns={[1, 3, 5]}>
          <Center>
            <Text fontWeight="bold" fontSize={14} color={'black'}>
              2 Free Mint
            </Text>
          </Center>
          <Center>
            <Text fontWeight="bold" fontSize={14} color={'black'}>
              0.0069 Additional
            </Text>
          </Center>
          <Center>
            <Text fontWeight="bold" fontSize={14} color={'black'}>
              4444 Max Supply
            </Text>
          </Center>
          <Center>
            <Text fontWeight="bold" fontSize={14} color={'black'}>
              MAX5 Per Transactions
            </Text>
          </Center>
          <Center>
            <Text fontWeight="bold" fontSize={14} color={'black'}>
              Max 10 Mint Nfts Per Wallet
            </Text>
          </Center>
        </SimpleGrid>
      </Box>
    )
}

export default AppBar;