import React, { useState } from 'react';
import '../components/css/contact.css';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/9a730000-8bdb-11ed-a003-6f0b76086b1c';

const Contact = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState();

  const handleSubmit = e => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: count,
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          Object.keys(injectedData).forEach(key => {
            const el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error('Please finish the captcha challenge');
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .then(() => setCount(count + 1))
      .catch(err => setStatus(err.toString()));
  };

  if (status) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{status}</div>
      </>
    );
  }

  return (
    <section className="pagesWrapper">
      <div className="contactPage">
        <h2 className="header_sections" id="contact">
          <span className="num">0.3 </span>
          Contact
        </h2>
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          className="formStyling"
        >
          <div className="formDivs">
            <label for="name" className="formLabels">
              Name:
            </label>
            <input
              name="Name"
              id="name"
              type="text"
              required
              className="formInputs"
              placeholder="Your name.."
            />
          </div>
          <div className="formDivs">
            <label for="email" className="formLabels">
              Email:
            </label>
            <input
              name="Email"
              id="email"
              type="email"
              required
              className="formInputs"
              placeholder="Your email.."
            />
          </div>
          <div className="formDivs messageDiv">
            <label for="Message" className="formLabels">
              Message:
            </label>
            <textarea
              name="Message"
              id="message"
              type="text"
              required
              className="formInputs message"
              placeholder="Your message.."
            />
          </div>
          <div className="formDivs">
            <input type="submit" value="submit" id="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
