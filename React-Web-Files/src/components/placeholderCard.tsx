import { Card, Container, Placeholder } from "react-bootstrap";
import PlaceholderImg from "../assets/placeholder.png";

function PlaceholderCard() {
  return (
    <>
      <div className="py-2">
        <Card className="bg-dark text-light">
          <Card.Img variant="top" src={PlaceholderImg} height="225" />
          {/* <Placeholder as={Card.Img} animation="glow" /> */}
          <Card.ImgOverlay>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button
                className="pt-4"
                variant="warning"
                xs={6}
                animation="wave"
              />
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}
export default PlaceholderCard;
