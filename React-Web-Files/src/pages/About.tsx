import { useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Founder from "../assets/boss.jpeg";

function About() {
  useEffect(() => {
    document.title = "Bean & Brew | About";
  });
  return (
    <>
      <Container>
        <Row>
          <h1 className="border-white-50 border-bottom py-3 text-center fw-bold">
            About us
          </h1>
        </Row>
        <Row className="py-3">
          <Col className="py-2 mx-3" xs={7}>
            <Row className="border-light rounded-corners my-2">
              <h2 className="fw-bold py-1 text-center text-white border-secondary border-bottom">
                Our Story
              </h2>
              <p className="text-light px-2 mx-2 my-3 fs-5">
                Once a modest corner cafe in a small town, our coffee shop has
                grown from humble beginnings. What started as a cozy gathering
                place for locals seeking a comforting cup of coffee has
                blossomed into a beloved community hub, where friendships are
                forged over steaming mugs of freshly brewed java. Our commitment
                to quality and warm hospitality has remained unchanged, making
                us a cherished part of the neighborhood's story.
              </p>
            </Row>
            <Row className="my-2">
              <Col className="border-light rounded-corners mx-2" xs={4}>
                <h2 className="fw-bold py-2 text-center text-white">
                  Founded in:
                </h2>
                <p className="text-white-50 px-2 mx-2 mt-1 mb-3 fs-4 text-center fw-bold">
                  August of 1924
                </p>
              </Col>
              <Col className="border-light rounded-corners mx-2">
                <h2 className="fw-bold py-2 text-center text-white">
                  Our First Location was:
                </h2>
                <p className="text-white-50 px-2 mx-2 mt-1 mb-3 fs-4 text-center fw-bold">
                  in Knaresboroug, Harrogate
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="border-light rounded-corners py-2 mx-3" xs={4}>
            <h2 className="fw-bold py-1 text-center text-white border-secondary border-bottom">
              Our Founder
            </h2>
            <Image
              src={Founder}
              alt="Founder"
              className="mx-5 px-1 py-3"
              height="500"
              rounded
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default About;
