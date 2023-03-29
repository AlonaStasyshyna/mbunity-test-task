import { Outlet } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { FooterContact } from 'components/FooterContact/FooterContact';
import { FooterList } from 'components/FooterList/FooterList';
import { FooterForm } from 'components/FooterForm/FooterForm';

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

      <footer>
        <Logo />
        <FooterContact />
        <FooterList />
        <FooterForm />
      </footer>
    </>
  );
};
