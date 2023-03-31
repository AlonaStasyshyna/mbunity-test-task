import { ContactInformation } from 'components/ContactInformation/ContactInformation';
import { MessageForm } from 'components/MessageForm/MessageForm';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Container } from 'utils/GlobalStyle.styled';
import { Wrapper } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <>
      <Container>
        <PageTitle
          title="Contact Us"
          text="Any question or remarks? Just write us a message!"
        />
        <Wrapper>
          <ContactInformation />
          <MessageForm />
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactsPage;
