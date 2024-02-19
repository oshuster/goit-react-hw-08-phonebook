import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';

const initState = {
  email: '',
  password: '',
};

const LogInForm = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initState);

  const handleClick = () => setShow(!show);

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  const { email, password } = formData;
  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired mb={15}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="example@mail.com"
          name="email"
          value={email}
          onChange={handleInput}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md" mb={15}>
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleInput}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Box display="flex" justifyContent="flex-end" width="100%">
        <Button colorScheme="teal" variant="solid" type="submit">
          LogIn
        </Button>
      </Box>
    </form>
  );
};

export default LogInForm;
