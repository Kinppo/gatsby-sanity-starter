import React, { useState } from "react";
import Popup from "../components/Popup";
import styled from "styled-components";
import Layout from "../templates/DefaultLayout";
import Seo from "../components/seo";

const Container = styled.div`
  height: 100%;
  min-height: calc(100vh - 121px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    text-align: center;
    margin-bottom: 1em;
    margin-top: 1em;
    text-transform: uppercase;
    font-weight: 700;
  }
  input {
    height: 3em;
  }
  input,
  textarea {
    width: 100%;
    outline: none;
    border: none;
    margin: 1em 0em;
    border: 2px solid #ccc;
  }
  textarea {
    padding-left: 0.7em;
  }
  form {
    width: 45%;
    min-width: 330px;
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
const Contact = () => {
  const [contact, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });
  const [popupState, setPopup] = useState("walo");
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contact })
    })
      .then(() => {
        setPopup("sucess");
      })
      .catch(() => {
        setPopup("error");
      });

    e.preventDefault();
  };
  return (
    <Layout location="contact">
      <Seo title="contact" />
      <Container>
        <h3>Feel free to Contact Me</h3>
        <form
          name="contact"
          method="POST"
          className="single-form quate-form"
          onSubmit={handleSubmit}
          id="contactForm"
        >
          <div id="msgSubmit" className="h3 text-center hidden"></div>
          <div>
            <input
              name="firstname"
              className="contact-name form-control"
              id="name"
              type="text"
              placeholder="First Name"
              required
              value={contact.firstname}
              onChange={e => {
                const val = e.target.value;
                setState(prevState => {
                  return { ...prevState, firstname: val };
                });
              }}
            />
          </div>
          <div>
            <input
              name="lastname"
              className="contact-email form-control"
              id="L_name"
              type="text"
              placeholder="Last Name"
              required
              value={contact.lastname}
              onChange={e => {
                const val = e.target.value;
                setState(prevState => {
                  return { ...prevState, lastname: val };
                });
              }}
            />
          </div>
          <div>
            <input
              name="email"
              className="contact-subject form-control"
              id="email"
              type="email"
              placeholder="Your Email"
              required
              value={contact.email}
              onChange={e => {
                const val = e.target.value;
                setState(prevState => {
                  return { ...prevState, email: val };
                });
              }}
            />
          </div>
          <div>
            <textarea
              name="message"
              className="contact-message"
              id="message"
              rows="6"
              placeholder="Your Message"
              required
              value={contact.message}
              onChange={e => {
                const val = e.target.value;
                setState(prevState => {
                  return { ...prevState, message: val };
                });
              }}
            ></textarea>
          </div>
          <button type="submit" className="btn-fill">
            Send
          </button>
        </form>
        <Popup type={popupState} setPopup={setPopup} />
      </Container>
    </Layout>
  );
};

export default Contact;
