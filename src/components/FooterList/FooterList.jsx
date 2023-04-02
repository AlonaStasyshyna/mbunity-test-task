import { Title } from 'components/Footer/Footer.styled';
import { List, Wrapper, LastWrapper } from './FooterList.styled';

export const FooterList = () => {
  return (
    <>
      <Wrapper>
        <Title>Company</Title>
        <List>
          <li>About</li>
          <li>Contact</li>
          <li>Blogs</li>
        </List>
      </Wrapper>
      <Wrapper>
        <Title>Legal</Title>
        <List>
          <li>Privacy Policy</li>
          <li>Terms & Services</li>
          <li>Terms of Use</li>
          <li>Refund Policy</li>
        </List>
      </Wrapper>
      <LastWrapper>
        <Title>Quick Links</Title>
        <List>
          <li>Techlabz Keybox</li>
          <li>Downloads</li>
          <li>Forum</li>
        </List>
      </LastWrapper>
    </>
  );
};
