import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';

const DividerComponent = ({ text }) => {
  return (
    <Box position="relative" padding="3">
      <Divider />
      <AbsoluteCenter bg="white" px="4">
        {text}
      </AbsoluteCenter>
    </Box>
  );
};

export default DividerComponent;
