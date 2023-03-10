// import Alert from '@mui/material/Alert';
import { AiOutlineSend } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../content_option"

export default function ContactUs() {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fmztxkc', 'template_4qkhicb', formRef.current, 'OdsapR4KpJKyC5q9T')
      .then((result) => {
        console.log(result.text);
        setTimeout(() => {
          alert('Your Message Has Been Sent')
        }, 1000);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };
  

  return (
    <Container>
      {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
     
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form ref={formRef} onSubmit={sendEmail} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                  name="user_name"
                    placeholder="Full Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                  name="user_email"
                    placeholder="Type Your Email Adress"
                    type="email" 
                    required 
                  />
                </Col>
                <Col lg="12" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                  name="Subject"
                    placeholder="Subject"
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit" value="send"> 
                  Send < AiOutlineSend />
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
  );
}
