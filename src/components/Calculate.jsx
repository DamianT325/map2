import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
const Calculate = ({
  originRef,
  destinationRef,
  calculateRoute,
  clearRoute,
  distance,
  duration,
}) => {
  return (
    <Box
      w={2}
      p={4}
      borderRadius="lg"
      m={4}
      bgColor="white"
      shadow="base"
      minW="container.md"
    >
      <HStack spacing={2} justifyContent="space-between">
        <Box flexGrow={1}>
          <Autocomplete>
            <Input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete>
        </Box>
        <Box flexGrow={1}>
          <Autocomplete>
            <Input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>
        </Box>

        <ButtonGroup>
          <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
            Calculate Route
          </Button>
          <IconButton
            aria-label="center back"
            icon={<FaTimes />}
            onClick={clearRoute}
          />
        </ButtonGroup>
      </HStack>
      <HStack spacing={4} mt={4} justifyContent="space-between">
        <Text>Distance: {distance}</Text>
        <Text>Duration: {duration}</Text>
      </HStack>
    </Box>
  );
};

export default Calculate;
