import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phoneNumber = "+916381670439"; 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const text = `Hello, my name is ${formData.name} (${formData.email}). ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank"); 
  };

  return (
    <section id="contact-sec" className="py-5 text-light">
      <Container id="contact-contain">
        <div className="section-heading">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h1>Let&apos;s make<br /><span>something</span><i>.</i></h1>
          <p className="section-intro">Tell me a little about what you&apos;re working on. I&apos;ll get back to you soon.</p>
        </div>

        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <Form id="form" className="p-4" onSubmit={handleWhatsApp}>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="contact-name" className="visually-hidden">Your name</Form.Label>
                <Form.Control
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contact-email" className="visually-hidden">Your email</Form.Label>
                <Form.Control
                  id="contact-email"
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="contact-message" className="visually-hidden">Your message</Form.Label>
                <Form.Control
                  id="contact-message"
                  as="textarea"
                  rows={4}
                  placeholder="What would you like to build?"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div id="form-btn">
                <Button type="submit" variant="success">
                  Send via WhatsApp <span aria-hidden="true">↗</span>
                </Button>
              </div>

            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
};

export default Contact;