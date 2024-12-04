// App.tsx
import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "./App.css";
import PuppyCard from "./components/PuppyCard";

import bingoImg from "./assets/bingo.jpeg";
import coltImg from "./assets/colt.jpeg";
import pupsImg from "./assets/pups.jpeg";
import MailchimpForm from "./components/MailchimpForm";

const coltBlack = "rgb(16 13 13)";

const App: React.FC = () => {
  // Sample data
  const puppies = [
    {
      name: "Puppies",
      image: pupsImg,
      description: "More pictures coming soon!",
    },
    // Add more puppies
  ];

  return (
    <Box p={4} fontWeight={100}>
      {/* Title */}
      <Heading
        as="h1"
        size="2xl"
        textAlign="center"
        mb={6}
        fontWeight={100}
        color={coltBlack}
      >
        Colt X Bingo
      </Heading>

      {/* Parents Section */}
      <Box textAlign="center" mb={10}>
        <Heading as="h2" size="xl" mb={4}>
          Meet the Parents
        </Heading>
        <SimpleGrid columns={[2]} gridGap={4}>
          <Box>
            <Image
              src={coltImg}
              alt="Colt"
              borderRadius="md"
              boxShadow="5px 3px 14px 0px #1c151099"
              w="100%"
              />
            <Text fontSize="21px" fontWeight={300} mt={2}>
              Colt
            </Text>
            <Text mt={2}>German Shepherd</Text>
          </Box>
          <Box>
            <Image
              src={bingoImg}
              alt="Bingo"
              borderRadius="md"
              boxShadow="5px 3px 14px 0px #1c151099"
              w="100%"
            />
            <Text fontSize="21px" fontWeight={300} mt={2}>
              Bingo
            </Text>
            <Text mt={2}>Golden Retriever</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Puppies Section */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4}>
          Our Puppies
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gridGap={4}>
          {puppies.map((puppy) => (
            <PuppyCard key={puppy.name} {...puppy} />
          ))}
        </SimpleGrid>
      </Box>

      {/* Waiting List Section */}
      <Box textAlign="center">
        <Text mt={2} mb={2}>
          Puppies will be available February 2025.
        </Text>
        <Heading as="h2" size="xl" mb={4}>
          Join Our Waiting List
        </Heading>
        {/* Embed a form from a free service */}
        <MailchimpForm />
      </Box>
    </Box>
  );
};

export default App;
