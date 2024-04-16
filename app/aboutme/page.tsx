import { Button, Col, Container, Row } from "react-bootstrap";
export default function Aboutme() {
    return (
    <>
      <h1>Verify page</h1>
      <p>
        This page is intended to verify that Redux state is persisted across
        page navigations.
      </p>
      <Container>
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