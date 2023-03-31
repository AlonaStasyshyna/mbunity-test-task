import { useState } from 'react';
import {
  DataInput,
  DataLabel,
  Form,
  Section,
  SubjectLabel,
  SubjectText,
  DataWrapper,
  SubjectWrapper,
  SubjectInput,
  MessageLabel,
  MessageTextarea,
  Button,
  ButtonWrapper,
} from './MessageForm.styled';

export const MessageForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = e => {
    e.preventDefault();

    setFirstName('');
    setLastName('');
    setEmail('');
    setTel('');
    setMessage('');
  };

  const changeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'tel':
        setTel(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };

  return (
    <Section>
      <Form onSubmit={submitForm}>
        <DataWrapper>
          <DataLabel isFilled={firstName.length}>
            First Name
            <DataInput
              type="text"
              name="firstName"
              value={firstName}
              onChange={changeInput}
            />
          </DataLabel>
          <DataLabel>
            Last Name
            <DataInput
              type="text"
              name="lastName"
              value={lastName}
              onChange={changeInput}
            />
          </DataLabel>
          <DataLabel>
            Email
            <DataInput
              type="email"
              name="email"
              value={email}
              onChange={changeInput}
            />
          </DataLabel>
          <DataLabel>
            Phone Number
            <DataInput
              type="tel"
              name="tel"
              value={tel}
              onChange={changeInput}
            />
          </DataLabel>
        </DataWrapper>

        <SubjectText>Select Subject?</SubjectText>
        <SubjectWrapper>
          <SubjectLabel>
            <SubjectInput
              type="radio"
              name="subject"
              value="first"
              defaultChecked={true}
            />
            General Inquiry
          </SubjectLabel>
          <SubjectLabel>
            <SubjectInput type="radio" name="subject" value="second" />
            General Inquiry
          </SubjectLabel>
          <SubjectLabel>
            <SubjectInput type="radio" name="subject" value="third" />
            General Inquiry
          </SubjectLabel>
          <SubjectLabel>
            <SubjectInput type="radio" name="subject" value="fourth" />
            General Inquiry
          </SubjectLabel>
        </SubjectWrapper>

        <MessageLabel>
          Message
          <MessageTextarea
            name="message"
            rows="1"
            value={message}
            placeholder="Write your message..."
            onChange={changeInput}
          ></MessageTextarea>
        </MessageLabel>

        <ButtonWrapper>
          <Button type="submit">Send Message</Button>
        </ButtonWrapper>
      </Form>
    </Section>
  );
};
