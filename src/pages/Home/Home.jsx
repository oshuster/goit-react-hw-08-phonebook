import { Image, Flex, Text } from '@chakra-ui/react';

import phoneBookIcon from '../../img/svg/phone-book.svg';

const Home = () => {
  return (
    <Flex
      alignItems="center"
      height="90vh"
      flexDirection="column"
      paddingTop="15%"
    >
      <Text fontSize="6xl">Favorite Contacts!</Text>
      <Image boxSize="250px" src={phoneBookIcon} alt="phone book" />
    </Flex>
  );
};
export default Home;
