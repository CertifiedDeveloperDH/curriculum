import { Button, Col, Container, Row, Image } from "react-bootstrap";
export default function Aboutme() {
    return (
    <>
      <Container fluid className="d-flex justify-content-center">
      <Row>
        <Col>
          <h1 className="text-danger fw-bold">Home</h1>
          <Button variant="primary" className="mt-5 ">Click Me</Button>
        </Col>
      </Row>
    </Container>
    </>
    );
  };