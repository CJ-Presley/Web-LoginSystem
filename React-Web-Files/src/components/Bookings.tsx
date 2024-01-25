import { Card, Button, Col, Row } from "react-bootstrap";
import Img1 from "../assets/DuK.png";
import Img2 from "../assets/hARRhARR.png";
import Img3 from "../assets/Latte_art_3.jpg";

function BookingCards() {
  return (
    <>
      <Row className="py-3">
        <Col className="mx-5">
          {/* <Card style={{ width: "20rem" }} bg="dark">
            <Card.Img variant="top" src={Img1} height="200" width="80" />
            <Card.Body>
              <Card.Title className="text-light fw-bold">Pre-Order</Card.Title>
              <Card.Text className="text-light">
                Order Food/ Drink before you arrive
              </Card.Text>
              <Button className="mb-4 mt-5" variant="primary">
                Click Here
              </Button>
            </Card.Body>
          </Card> */}
          <Card style={{ width: "20rem" }} bg="dark">
            <Card.Img variant="top" src={Img1} height="200" width="80" />
            <Card.Body>
              <Card.Title className="text-light fw-bold">Pre-Order</Card.Title>
              <Card.Text className="text-light">
                Order Food/ Drink before you arrive
              </Card.Text>
              <Button className="mb-4 mt-5" variant="primary">
                Click Here
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mx-5">
          <Card style={{ width: "20rem" }} bg="dark">
            <Card.Img variant="top" src={Img2} height="200" width="80" />
            <Card.Body>
              <Card.Title className="text-light fw-bold">
                Table Bookings
              </Card.Title>
              <Card.Text className="text-light">
                Reserve a table at one of our locations
              </Card.Text>
              <Button className="mb-4 mt-5" variant="primary">
                Click Here
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mx-5">
          <Card style={{ width: "20rem" }} bg="dark">
            <Card.Img variant="top" src={Img3} height="200" width="80" />
            <Card.Body>
              <Card.Title className="text-light fw-bold">
                Classes Booking
              </Card.Title>
              <Card.Text className="text-light">
                Book a cooking class.
              </Card.Text>
              <Button className="mb-4 mt-5" variant="primary">
                Click Here
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default BookingCards;
