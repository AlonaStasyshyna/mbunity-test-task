import { FooterContact } from 'components/FooterContact/FooterContact';
import { FooterForm } from 'components/FooterForm/FooterForm';
import { FooterList } from 'components/FooterList/FooterList';
import { Logo } from 'components/Logo/Logo';
import { Container } from 'utils/GlobalStyle.styled';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Logo />
        <FooterContact />
        <FooterList />
        <FooterForm />
      </Container>
    </footer>
  );
};
