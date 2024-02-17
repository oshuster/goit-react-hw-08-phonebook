import { Outlet } from 'react-router-dom';
import Header from 'components/Navbar/Navbar';
// import { Suspense } from 'react';
// import Spinner from 'components/Loading/Loading';

const SharedLayout = () => {
  return (
    <>
      <Header />
      {/* <Suspense fallback={<Spinner />}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default SharedLayout;
