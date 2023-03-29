import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav></nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
