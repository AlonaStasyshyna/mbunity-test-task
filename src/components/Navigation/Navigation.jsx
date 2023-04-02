import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { CloseMenuButton } from '../MenuButton/CloseMenuButton';
import { MenuButton } from '../MenuButton/MenuButton';
import { Nav } from './Nav';
import { Logo } from './Nav.styled';

export const Navigation = () => {
  const [isBurgerNavOpen, setIsBurgerNavOpen] = useState(false);
  const isDesktop = useMedia('(min-width: 1236px)');

  useEffect(() => {}, [isBurgerNavOpen, isDesktop]);

  const openBurgerNav = () => {
    setIsBurgerNavOpen(true);
  };

  const closeBurgerNav = e => {
    if (e.target.nodeName === 'A' || e.currentTarget.nodeName === 'BUTTON') {
      setIsBurgerNavOpen(false);
    }
  };

  return (
    <>
      {isDesktop && <Nav isBurgerNavOpen={isBurgerNavOpen} />}
      {!isBurgerNavOpen && !isDesktop && (
        <>
          <Logo
            href="/mbunity-test-task/contacts"
            visibility={isBurgerNavOpen.toString()}
          >
            Logo Here
          </Logo>
          <MenuButton
            openBurgerNav={openBurgerNav}
            isBurgerNavOpen={isBurgerNavOpen}
          />
        </>
      )}
      {isBurgerNavOpen && !isDesktop && (
        <>
          <Nav isBurgerNavOpen={isBurgerNavOpen} />
          <CloseMenuButton
            closeBurgerNav={closeBurgerNav}
            isBurgerNavOpen={isBurgerNavOpen}
          />
        </>
      )}
    </>
  );
};
