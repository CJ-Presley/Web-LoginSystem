import { Card, Button, Col, Row, Container } from "react-bootstrap";
import Img2 from "../assets/cafe.png";
import Img1 from "../assets/Latte_art_3.jpg";

function BookingCards() {
  return (
    <>
      <Container className="">
        <Row className="py-5">
          <Col className="" xs={5}>
            <Card bg="dark">
              <Card.Img variant="top" src={Img2} height="500" width="80" />
              <Card.Body>
                <Card.Title className="text-light fw-bold">
                  Table Bookings
                </Card.Title>
                <Card.Text className="text-light">
                  Reserve a table at one of our locations
                </Card.Text>
                <Button
                  href="/reservations"
                  className="mb-4 mt-5"
                  variant="primary"
                >
                  Click Here
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="" xs={5}>
            <Card bg="dark">
              <Card.Img variant="top" src={Img1} height="500" width="80" />
              <Card.Body>
                <Card.Title className="text-light fw-bold">
                  Classes Booking
                </Card.Title>
                <Card.Text className="text-light">
                  Book a cooking class.
                </Card.Text>
                <Button href="/classes" className="mb-4 mt-5" variant="primary">
                  Click Here
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default BookingCards;
