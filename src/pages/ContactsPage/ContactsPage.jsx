import { ContactInformation } from 'components/ContactInformation/ContactInformation';
import { MessageForm } from 'components/MessageForm/MessageForm';
import { PageTitle } from 'components/PageTitle/PageTitle';

const ContactsPage = () => {
  return (
    <>
      <PageTitle
        title="Contact Us"
        text="Any question or remarks? Just write us a message!"
      />
      <ContactInformation />
      <MessageForm />
    </>
  );
};

export default ContactsPage;
