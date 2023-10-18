import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react";
import Notifications from "./components/Notifications.jsx";
import Options from "./components/Options.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";

function App() {
  return (
    <Box>
      <Container maxW="1200px" mt="8">
        <Heading as="h2" size="2xl">
          {" "}
          Video Chat App{" "}
        </Heading>

        <VideoPlayer />
        <Options />
        <Notifications />
      </Container>
    </Box>
  );

}

export default App;
