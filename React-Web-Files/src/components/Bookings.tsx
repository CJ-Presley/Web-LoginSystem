import { Card, Button, Col, Row, Container } from "react-bootstrap";
import Img2 from "../assets/cafe.png";
import Img1 from "../assets/Latte_art_3.jpg";
import { MDBRipple } from "mdb-react-ui-kit";

function BookingCards() {
  return (
    <>
      <Container className="px-5 mx-5">
        <Row className="px-5 mx-5 py-3">
          <Col className="" xs={5}>
            <MDBRipple
              className="bg-image"
              rippleTag="div"
              rippleColor="warning"
            >
              <img
                alt="Coffee Cup Image, Background for Card"
                src={Img1}
                className="img-fluid w-100"
                style={{ height: "40rem", width: "30rem" }}
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <p className="text-white mb-0">No</p>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
          </Col>
          <Col className="" xs={5}>
            <MDBRipple
              className="bg-image"
              rippleTag="div"
              rippleColor="warning"
            >
              <img
                alt="Coffee Shop Image, Background for Card"
                src={Img2}
                className="img-fluid w-100"
                style={{ height: "40rem", width: "30rem" }}
              />

              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="px-1">
                      <h1 className="fw-bold text-white">Table Bookings</h1>
                      <p className="text-white mb-0">Can you see me?</p>
                    </div>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default BookingCards;

{
  /*<Row className="py-5">
          <Col className="" xs={4}>
            <Card bg="dark" style={{width:"26rem"}}>
              <Card.Img className="darkened-image" variant="top" src={Img2} height="500" width="80" />
              <Card.ImgOverlay>
              <Card.Body>
                <Card.Title className="text-light fw-bold">
                  Table Bookings
                </Card.Title>
                <Card.Text className="text-light mb-5">
                  Reserve a table at one of our locations
                </Card.Text>
                <Button
                  href="/reservations"
                  className="mb-4 mt-5 "
                  variant="primary"
                >
                  Click Here
                </Button>
              </Card.Body>
              </Card.ImgOverlay>
            </Card>
            </Col>
            <Col className="">
            <Card bg="dark" style={{width:"26rem"}}>
              <Card.Img variant="top" className="darkened-image" src={Img1} height="500" width="80" />
              <Card.ImgOverlay>
              <Card.Body>
                <Card.Title className="text-light fw-bold">
                  Classes Booking
                </Card.Title>
                <Card.Text className="text-light mb-5">
                  Book a cooking class.
                </Card.Text>
                <Button href="/classes" className="mb-4 mt-5" variant="primary">
                  Click Here
                </Button>
              </Card.Body>
              </Card.ImgOverlay>
</Card>*/
}
