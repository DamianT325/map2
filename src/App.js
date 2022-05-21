import { Box, Flex, SkeletonText, Button } from "@chakra-ui/react";
import Map from "./components/Map";
import Calculate from "./components/Calculate";
import Price from "./components/Price";
import { useJsApiLoader } from "@react-google-maps/api";
import { useMemo, useRef, useState, useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const center = { lat: 52.237049, lng: 21.017532 };
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState(0);
  const [travelOption, setTravelOption] = useState("");
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();
  let meters;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <SkeletonText />;
  }

  const calculateRoute = async () => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    meters = results.routes[0].legs[0].distance.value;
    console.log(results);
  };

  const selectHandler = (e) => setTravelOption(e.target.value);
  const calculatePrice = (meters) => {
    console.log(travelOption);
    const dist = parseInt(distance);
    if (originRef.current.value === "") {
      return;
    }
    if (travelOption === "car") {
      console.log("sdadsad");
      setPrice(dist * ((dist * 0, 9) * 1.1));
    } else if (travelOption === "bike") {
      setPrice(dist * ((dist * 0, 35) * 1.1));
    } else if (travelOption === "train") {
      setPrice(dist * ((dist * 0, 1) * 1.1));
    }
  };
  function clearRoute() {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <>
      <Flex position="relative">
        <Box zIndex={5}>
          <Price
            travelOption={travelOption}
            selectHandler={selectHandler}
            calculatePrice={calculatePrice}
            price={price}
          />
        </Box>
        <Box zIndex={5}>
          <Calculate
            originRef={originRef}
            destinationRef={destinationRef}
            calculateRoute={calculateRoute}
            clearRoute={clearRoute}
            distance={distance}
            duration={duration}
          />
        </Box>
        <Box w="100%" h="100vh" position="absolute">
          <Map
            center={center}
            directionResponse={directionResponse}
            map={map}
            setMap={setMap}
            calculateRoute={calculateRoute}
          />
        </Box>
      </Flex>
    </>
  );
}

export default App;
