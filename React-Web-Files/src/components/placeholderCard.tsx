import { Card, Container, Placeholder } from "react-bootstrap";
import PlaceholderImg from "../assets/placeholder.png";

function PlaceholderCard() {
  return (
    <>
      <Container>
        <div className="py-3 d-flex justify-content-around">
          <Card className="bg-dark text-light">
            <Card.Img variant="top" src={PlaceholderImg} max-height="300" />
            {/* <Placeholder as={Card.Img} animation="glow" /> */}
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="warning" xs={6} animation="wave" />
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
export default PlaceholderCard;

