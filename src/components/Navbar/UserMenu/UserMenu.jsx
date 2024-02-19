import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { logOut } from '../../../redux/auth/auth-operations';

const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Flex>
      <Avatar name="User Name" src="https://bit.ly/broken-link" bg="teal.500" />
      <Box ml="3">
        <Text fontWeight="bold" mb={0}>
          {email}
        </Text>
        <Button
          ml="65%"
          colorScheme="teal"
          size="xs"
          variant="outline"
          onClick={handleLogOut}
        >
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export default UserMenu;
