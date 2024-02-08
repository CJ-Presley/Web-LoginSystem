import { useEffect } from "react";
import HomeCar from "../components/CarouselHome";
import PlaceholderCard from "../components/placeholderCard";
import { Row, Col, Container } from "react-bootstrap";
import PHContent from "../components/PlaceholderContent";

function Home() {
  useEffect(() => {
    document.title = "Bean & Brew | Home";
  });
  return (
    <>
      <HomeCar />
      <Container>
        <Row>
          <Col>
            <PlaceholderCard />
          </Col>
          <Col>
            <PlaceholderCard />
          </Col>
          <Col>
            <PlaceholderCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlaceholderCard />
          </Col>
          <Col>
            <PlaceholderCard />
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <PHContent />
          </Col>
          <Col>
            <PHContent />
          </Col>
          <Col>
            <PHContent />
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <PHContent />
          </Col>
          <Col>
            <PHContent />
          </Col>
        </Row>
        <Row className="pb-3 pt-2">
          <Col>
            <PHContent />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
