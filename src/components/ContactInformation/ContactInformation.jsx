import { ContactList } from 'components/ContactList/ContactList';
import { SocialNetworks } from 'components/SocialNetworks/SocialNetworks';
import { Section, Text, Title } from './ContactInformation.styled';

export const ContactInformation = () => {
  return (
    <Section>
      <Title>Contact Information</Title>
      <Text>Say something to start a live chat!</Text>

      <ContactList />
      <SocialNetworks />
    </Section>
  );
};
