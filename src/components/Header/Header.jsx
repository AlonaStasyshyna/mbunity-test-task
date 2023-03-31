import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'utils/GlobalStyle.styled';

export const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
};
