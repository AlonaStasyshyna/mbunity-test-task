import { ContactList } from 'components/ContactList/ContactList';
import { SocialNetworks } from 'components/SocialNetworks/SocialNetworks';

export const ContactInformation = () => {
  return (
    <section>
      <h2>Contact Information</h2>
      <p>Say something to start a live chat!</p>

      <ContactList />
      <SocialNetworks />
    </section>
  );
};
