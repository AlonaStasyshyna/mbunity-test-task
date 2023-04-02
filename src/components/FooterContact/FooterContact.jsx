import { ContactList } from 'components/ContactList/ContactList';
import { Title } from 'components/Footer/Footer.styled';
import { Wrapper } from './FooterContact.styled';

export const FooterContact = () => {
  return (
    <Wrapper>
      <Title>Reach us</Title>
      <ContactList />
    </Wrapper>
  );
};
