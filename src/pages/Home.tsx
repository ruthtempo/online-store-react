import { Card, Carousel, Col, Nav, Ratio, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import image3 from "../img/boys.jpg";
import image1 from "../img/dresses.jpg";
import electronics from "../img/electronics.jpg";
import image2 from "../img/jeans2.jpg";
import jewelry from "../img/jewelry.jpg";
import mensClothing from "../img/mensClothing.jpg";
import buttons from "../img/smoke.jpg";
import womenClothing from "../img/womenClothing.jpg";

export const Home = (p: { categories: string[] }) => {
  return (
    <>
      <Row className="my-2">
        <Col>
          <Card>
            <Carousel>
              <Carousel.Item>
                <Ratio aspectRatio="16x9">
                  <img className="d-block w-100" src={jewelry} alt="jewelry" />
                </Ratio>
                <Carousel.Caption>
                  <h3>JEWELRY</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Ratio aspectRatio="16x9">
                  <img
                    className="d-block w-100"
                    src={womenClothing}
                    alt="womens clothing"
                  />
                </Ratio>
                <Carousel.Caption>
                  <h3>WOMEN'S CLOTHING</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Ratio aspectRatio="16x9">
                  <img
                    className="d-block w-100"
                    src={mensClothing}
                    alt="mensClothing"
                  />
                </Ratio>
                <Carousel.Caption>
                  <h3>MEN'S CLOTHING</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Ratio aspectRatio="16x9">
                  <img
                    className="d-block w-100"
                    src={electronics}
                    alt="electronics"
                  />
                </Ratio>
                <Carousel.Caption>
                  <h3>ELECTRONICS</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
      </Row>
      <Row>
        {p.categories.map((cat) => (
          <Col sm={6} lg={6} xxl={3} className="mb-2">
            <Nav.Link as={Link} to={`category/${encodeURIComponent(cat)}`}>
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
                  <Card.Title>{cat.toUpperCase()}</Card.Title>
                </Card.Body>
              </Card>
            </Nav.Link>
          </Col>
        ))}
      </Row>
      <Row md={3} className="mb-2">
        <Col lg={4} md={4}>
          <Card>
            <img src={image1} alt="dresses" className="card-img" />
          </Card>
        </Col>
        <Col lg={4} md={4}>
          <Card>
            <img src={image2} alt="jeans" className="card-img" />
          </Card>
        </Col>
        <Col lg={4} md={4}>
          <Card>
            <img src={image3} alt="models" className="card-img" />
          </Card>
        </Col>
      </Row>
    </>
  );
};
