import { Col, Row, Container } from "react-bootstrap";
import asset3 from "../img/Asset-3.png";
const About = () => {
  return (
    <Container className="text-center mt-4">
      <Row>
        <Col className="d-flex align-item-center justify-content-center">
          <img src={asset3} alt="" />
        </Col>
        <Col>
          <h1>Who We are?</h1>
          <p>
            Who We Are We’re a Virginia-based IT training school specializing in
            Cloud Engineering, DevOps Engineering, Data Analytics, Data Science,
            Machine Learning, Deep Learning, Full Stack Development, Front End
            Development, and Back End Development. We’ve established a practical
            bridge connecting the world of research and theory with emerging
            industry trends. In the ever-changing IT world, we continually
            update our versatile curriculum based on the latest advances in
            technology. Collectively, we bring more than 80 years of industry
            experience to Clarusway. Our program focuses on designing,
            delivering, and evaluating career-related programs for adult
            learners.
          </p>
          <h1>Our Purpose</h1>
          <p>
            With the rise of technological innovations, automation, and
            robotics, machines have gradually and inevitably displaced with
            reliable blue-collar jobs. This steady decline in well-paying jobs
            has created distress among the labor workforce – especially for
            blue-collar workers! High-level white-collar jobs require
            considerable time and monetary investment to obtain the necessary
            degrees. There’s a growing need for professional career training in
            a variety of trades. While our society has a steady demand for
            doctors, nurses, attorneys, financial analysts, and other educated
            professionals, there’s also a growing need for a highly-skilled IT
            workforce.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
