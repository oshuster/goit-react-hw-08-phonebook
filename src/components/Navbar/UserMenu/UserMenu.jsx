import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';

const UserMenu = () => {
  const { email } = useSelector(selectUser);

  return (
    <Flex>
      <Avatar name="User Name" src="https://bit.ly/broken-link" bg="teal.500" />
      <Box ml="3">
        <Text fontWeight="bold" mb={0}>
          {email}
        </Text>
        <Button
          colorScheme="teal"
          size="xs"
          variant="outline"
          onClick={() => {
            console.log('click xD');
          }}
        >
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export default UserMenu;
