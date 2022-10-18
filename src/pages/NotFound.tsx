import { Row, Col } from "react-bootstrap";

export const NotFound = () => {
  return (
    <Row>
      <Col
        md={{ span: 6, offset: 3 }}
        lg={{ span: 4, offset: 4 }}
        className="mt-4 text-center"
      >
        <h3>Oops!</h3>
        <p> Sorry, an unexpected error has occured</p>
        <p>
          <i>Not Found</i>
        </p>
      </Col>
    </Row>
  );
};
