import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <Logo />
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
