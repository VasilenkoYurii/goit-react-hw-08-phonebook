import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { OutletBox } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
