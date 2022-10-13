import { Card, Carousel, Col, Row } from "react-bootstrap";
import image3 from "../img/boys.jpg";
import image1 from "../img/dresses.jpg";
import electronics from "../img/electronics.jpg";
import image2 from "../img/jeans2.jpg";
import jewelry from "../img/jewelry.jpg";
import mensClothing from "../img/mensClothing.jpg";
import buttons from "../img/smoke.jpg";
import womenClothing from "../img/womenClothing.jpg";

export const Home = (p: { categories: string[] }) => {
  const categories = p.categories.map((cat) => cat.toUpperCase());
  return (
    <>
      <Row className="mb-2">
        <Col>
          <Card>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={jewelry}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>JEWELRY</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={womenClothing}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>WOMEN'S CLOTHING</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={mensClothing}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>MEN'S CLOTHING</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={electronics}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>ELECTRONICS</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        {categories.map((cat) => (
          <Col sm={3} className="mb-2">
            <Card
              className="h-100"
              style={{
                backgroundImage: `url(${buttons})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Card.Body className="text-center text-white d-flex align-items-center justify-content-center shadow-sm">
                <Card.Title>{cat}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row md={3} className="mb-2">
        <Col lg={4} md={4}>
          <Card>
            <img src={image1} />
          </Card>
        </Col>
        <Col lg={4} md={4}>
          <Card>
            <img src={image2} />
          </Card>
        </Col>
        <Col lg={4} md={4}>
          <Card>
            <img src={image3} />
          </Card>
        </Col>
      </Row>
    </>
  );
};
