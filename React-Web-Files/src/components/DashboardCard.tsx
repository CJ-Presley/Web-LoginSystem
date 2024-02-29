import { Button, Card, Col } from "react-bootstrap";
import PlaceholderImage from "../assets/placeholder.png"

function DashCard() {
  return (
    <>
      <div className="py-2 d-flex justify-content-around">
        <Col>
          <Card className="bg-dark text-light pt-3" style={{height:"225px"}}>
            <Card.Body>
              <Card.Title className="fw-bold">Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                duhsiuhfisuhdsfsdfsd
              </Card.Text>
              <Button variant="outline-warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
}
export default DashCard;
