import { FooterContact } from 'components/FooterContact/FooterContact';
import { FooterForm } from 'components/FooterForm/FooterForm';
import { FooterList } from 'components/FooterList/FooterList';
import { Container } from 'utils/GlobalStyle.styled';
import { CustomizedFooter, Logo, Wrapper } from './Footer.styled';

export const Footer = () => {
  return (
    <CustomizedFooter>
      <Container>
        <Logo href="/mbunity-test-task/contacts">Logo Here</Logo>

        <Wrapper>
          <FooterContact />
          <FooterList />
          <FooterForm />
        </Wrapper>
      </Container>
    </CustomizedFooter>
  );
};
