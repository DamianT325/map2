import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
const Map = ({ center, directionResponse, map, setMap, calculateRoute }) => {
  console.log(directionResponse);
  const mapa = useMemo(() => {
    return (
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        {directionResponse && (
          <DirectionsRenderer directions={directionResponse} />
        )}
      </GoogleMap>
    );
  });
  return (
    <Box position="relative" h="100%" w="100%">
      {/* Google Map Box */}
      {mapa}
    </Box>
  );
};

export default Map;
