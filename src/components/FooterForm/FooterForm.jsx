import { Title } from 'components/Footer/Footer.styled';
import { Button, Form, Input, Text, Wrapper } from './FooterForm.styled';

export const FooterForm = () => {
  return (
    <Wrapper>
      <Title>Join Our Newsletter</Title>

      <Form>
        <Input type="email" name="email" placeholder="Your email address" />
        <Button type="submit">Subscribe</Button>
      </Form>

      <Text>
        * Will send you weekly updates for your better tool management.
      </Text>
    </Wrapper>
  );
};
