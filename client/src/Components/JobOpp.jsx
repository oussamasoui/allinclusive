import React, { Component } from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";


class JobOpp extends Component {

    render(){

      var sectionStyle = {
        fontSize: "30px",
        width: "100%",
        height: "600px",
        backgroundImage:
          "url(" +
          "https://www.ohspa.ca/wp-content/uploads/2015/07/signup-background.jpg" +
          ")",
      };
        return (
        
            <div>
                <br></br>
                <br></br>
                <center>
                  <Container style={sectionStyle}>
                    <Row>
                <Col style={{fontSize:'20px'}}>
            <h1>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-emoji-sunglasses"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM6.5 6.497V6.5h-1c0-.568.447-.947.862-1.154C6.807 5.123 7.387 5 8 5s1.193.123 1.638.346c.415.207.862.586.862 1.154h-1v-.003l-.003-.01a.213.213 0 0 0-.036-.053.86.86 0 0 0-.27-.194C8.91 6.1 8.49 6 8 6c-.491 0-.912.1-1.19.24a.86.86 0 0 0-.271.194.213.213 0 0 0-.036.054l-.003.01z"
                    />
                    <path d="M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM9 5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-2-2V5z" />
                  </svg>
                  Particular
                </h1>
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" placeholder="Enter your first name" />
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" placeholder="Enter your last name" />
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter email" />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                />
                
                <Form.Label>Image URL</Form.Label>
                <Form.Control name="url" placeholder="Enter your image URL" />
                </Col>
                <Col style={{fontSize:'20px'}}>
                <br></br>
                <br></br>
                <br></br>
                <Form.Label>Weight</Form.Label>
                <Form.Control name="weight"  />
                <Form.Label>Height</Form.Label>
                <Form.Control name="height" />
                <Form.Label>Age</Form.Label>
                <Form.Control name="age" />
                <Form.Label>Gendre</Form.Label>
                <br></br>
                
                  <button type="button" class="btn btn-dark">
                    Submit
                  </button>
                </Col>
                
                </Row>
                
                
                <br></br>
                <br></br>
                <br></br>
                </Container>
              </center>
              </div>
        
        );
    }
}

export default JobOpp;