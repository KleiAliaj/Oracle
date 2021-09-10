import React, { useState, useEffect,Component } from "react";
import { Container, Row, Col ,Form } from 'react-bootstrap'; 
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import './ContactPage.css';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: props.title,
            name: '',
            email: '',
            subject: '',
            message: ''
        } 

        this.sendEmail = this.sendEmail.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 
    
    
        sendEmail(e) {
            e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
            const { name, email, subject, message } = this.state;

            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: 'Tria Bagus',
                from_subject: subject,
                message_html: message,
              };

              emailjs.sendForm('service_x1wzqai', 'template_1sdfczk', e.target, 'user_lSwsxkcl1l3nMFYX6vCfE')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
        };

        resetForm() {
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
                id:'',
              });
        }
        
        handleChange(event) {
            this.setState({ [event.target.name]: event.target.value });
        }

        render() {  
    
        const { name, email, subject, message  } = this.state;

        return ( 
            
            <div className="pages"> 
             <Container fluid className="resume-section">
                <div className="section-title">
                    <div className="main-title">
                        <div className="title-main-page">  
                            <h4>Let's Talk</h4>  
                        </div>
                    </div>
                </div>
                </Container>
                <Container fluid>    
                  
                <Row className="justify-content-md-center py-5">
                <Col xs={12} md={8} lg={8}>    
                <Form   onSubmit={this.sendEmail}>
                    <Form.Row>
                        <Form.Group controlId="formGridName" className="col-sm-12 col-md-6">  
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridEmail" className="col-sm-12 col-md-6"> 
                            <Form.Control
                                type="email"
                                placeholder="email@gmail.com"
                                name="email" 
                                value={email}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form.Row> 

                    <Form.Group controlId="formGridSubject"> 
                        <Form.Control
                            type="text"
                            placeholder="What is the subject?"
                            name="subject"
                            value={subject}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.message"> 
                        <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Message"
                            name="message"
                            value={message}
                            onChange={this.handleChange}
                        />
                    </Form.Group> 

                    <button className="bt-submit" type="submit" value="send">
                        Send Message
                    </button>
                                
                    </Form>
                    </Col>
                    <Col xs={12} md={8} lg={4} className="d-none d-lg-block">
                        <img src="https://freesvg.org/img/1551573393.png" alt="message" />
                    </Col>     
                    </Row>
                    </Container> 
            </div>
        );
    }
}
 
export default Contact;