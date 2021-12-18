import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyCard from "./MyCard";

const Courses = ({ data }) => {
  return (
    <div>
      <Container>
        <Row>
          {data.map((course) => {
            return (
              <Col xs={12} md={6} lg={4}>
                <MyCard course={course} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
