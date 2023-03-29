export const MessageForm = () => {
  return (
    <section>
      <form>
        <label>
          First Name
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Phone Number
          <input type="tel" name="tel" />
        </label>

        <p>Select Subject?</p>
        <label>
          <input type="radio" name="subject" value="first" checked />
          General Inquiry
        </label>
        <label>
          <input type="radio" name="subject" value="second" />
          General Inquiry
        </label>
        <label>
          <input type="radio" name="subject" value="third" />
          General Inquiry
        </label>
        <label>
          <input type="radio" name="subject" value="fourth" />
          General Inquiry
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="1"
            placeholder="Write your message..."
          ></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};
