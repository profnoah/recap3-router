import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fs1 from "../img/fs1.png";

const FullStack = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <img src={fs1} alt="" className="w-100" />
          </Col>
          <Col>
            <h1>Full Stack Web Development Learning Path</h1>
            <h2>Front-End & Back-End Development</h2>
            <p>
              We know there’s a high demand for professional Full Stack
              Developers and we’re committed to helping students learn all they
              need to know for success as IT professionals! The learning path
              starts with the IT Fundamentals module for beginners and continues
              with front-end and back-end developer course modules. Do you get
              excited about learning new things? Are you ready to give your
              career a boost?
            </p>
            <Col>
              <button className="btn btn-danger">Apply</button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FullStack;
