import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
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

    if (!formData.name || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    const text = `Hello, my name is ${formData.name} . emaile${formData.emaile}. are you web developer ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank"); 
  };

  return (
    <section id="contact-sec" className="py-5  text-light">
      <Container id="contact-contain">
        <h2 className="text-center mb-4 ">Contact Me</h2>

        <Row className="justify-content-center">
          <Col md={6} >
            <Form id="form" className="p-4 ">

              <Form.Group id="form-G" className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="form-G" className="mb-3">
                <Form.Control
                  type="emaile"
                  placeholder="Enter your emaile"
                  name="emaile"
                  value={formData.emaile}
                  onChange={handleChange}
                />
              </Form.Group>


              <Form.Group id="form-G" className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <div id="form-btn" className="text-center">
                <Button variant="success" onClick={handleWhatsApp}>
                  Send via WhatsApp 
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