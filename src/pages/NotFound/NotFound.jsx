import { Button } from '@chakra-ui/react';
import styles from './notFound.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://i.imgur.com/Q2BAOd2.png"
        alt=""
        className={styles.img}
      />
      <p className={styles.title}>This Page is Not on the Map</p>
      <Button as={Link} to="/" colorScheme="teal" variant="outline">
        Get back to home page
      </Button>
    </div>
  );
};
export default NotFoundPage;
