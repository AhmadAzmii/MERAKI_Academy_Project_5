import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import "./ContactUs.css"

const ContactUs = ({ onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Define multiple recipients
    const recipients = 'ahmad.azmi.zed@gmail.com,natali.m.tawalbeh@gmail.com,loai.m.albadawi@gmail.com';

    // Set the value of the hidden to_email input field
    form.current.to_email.value = recipients;

    emailjs
      .sendForm('service_g6h4fbb', 'template_ei7t17h', form.current, 'T-VrkE9RGYjYsaho0')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  };

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Contact Us</MDBCardTitle>
              <button className="btn-close" onClick={onClose}></button>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <MDBInput type="text" name="from_name" required className="mb-2" />
                <label>Email</label>
                <MDBInput type="email" name="email_id" required className="mb-2" />
                <label>Message</label>
                <MDBInput type="textarea" name="message" required className="mb-2" />
                {/* Hidden input field for multiple recipients */}
                <input type="hidden" name="to_email" />
                <MDBBtn type="submit" className="mt-2">
                  Send
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactUs;
