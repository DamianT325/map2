import React from "react";
import { Box, Button, Flex, Text, Heading, Select } from "@chakra-ui/react";
const Price = ({ travelOption, selectHandler, calculatePrice, price }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      w={300}
      p={4}
      borderRadius="lg"
      m={4}
      bgColor="white"
      shadow="base"
    >
      <Box textAlign="center">
        <Heading as="h3" size="md" mb={2}>
          Price Config
        </Heading>
        <Select
          placeholder="Select option (default car)"
          value={travelOption}
          mb={3}
          onChange={selectHandler}
        >
          <option value="car">Car</option>
          <option value="train">Train</option>
          <option value="bike">Bike</option>
        </Select>
        <Text>Price for kilometr</Text>
        <Text>Car: 0,9$</Text>
        <Text>Train: 0,1$</Text>
        <Text>Bike: 0,35$</Text>
      </Box>
      <Button
        colorScheme="pink"
        type="submit"
        onClick={calculatePrice}
        alignItems="center"
      >
        Calculate Price
      </Button>
      <Text>Price: {price}$</Text>
    </Flex>
  );
};

export default Price;
