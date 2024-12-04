import { Box, Image, Text } from "@chakra-ui/react";

const coltBlack = "rgb(16 13 13 / 30%)";

interface PuppyCardProps {
  name: string;
  image: string;
  description: string;
}

const PuppyCard: React.FC<PuppyCardProps> = ({ name, image, description }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={4}
    backgroundColor={coltBlack}
    boxShadow="5px 3px 14px 0px #1c151099"
  >
    <Image src={image} alt={name} />
    <Text mt={2} fontSize="xl" fontWeight="semibold">
      {name}
    </Text>
    <Text mt={2}>{description}</Text>
  </Box>
);

export default PuppyCard;
