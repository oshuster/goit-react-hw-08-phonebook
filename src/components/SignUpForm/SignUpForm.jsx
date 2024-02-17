import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  Button,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';

const initState = {
  firstName: '',
  secondName: '',
  email: '',
  password: '',
};

const SignUpForm = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initState);

  const handleClick = () => setShow(!show);

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newData = {
      name: `${formData.firstName} ${formData.secondName}`,
      email: formData.email,
      password: formData.password,
    };
    onSubmit(newData);
    setFormData(initState);
  };

  const { firstName, secondName, email, password } = formData;
  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input
          placeholder="First name"
          name="firstName"
          value={firstName}
          onChange={handleInput}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Second name</FormLabel>
        <Input
          placeholder="Second name"
          name="secondName"
          value={secondName}
          onChange={handleInput}
        />
      </FormControl>
      <FormControl isRequired mb={15}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="example@mail.com"
          name="email"
          value={email}
          onChange={handleInput}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
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

      <Button colorScheme="teal" variant="solid" type="submit">
        SignUp
      </Button>
    </form>
  );
};

export default SignUpForm;
