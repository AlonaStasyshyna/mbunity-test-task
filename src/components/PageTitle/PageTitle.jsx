import { Section, Text, Title } from './PageTitle.styled';

export const PageTitle = ({ title, text }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Text>{text} </Text>
    </Section>
  );
};
