import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import plus from "../assets/icons8-plus-48.png";
import { Row, Col } from "react-bootstrap";

export interface MenuCardProps {
  item: string;
  type: string;
  desc: string;
  price: number;
  url: string;
}

function MenuCard({ item, type, desc, price, url }: MenuCardProps) {
  return (
    <Card className="my-4 mx-4" bg="dark" style={{ width: "18rem" }}>
      <Row className="">
        <Card.Img variant="top" src={url} height="250" width="1000" />
      </Row>
      <Card.Body>
        <Row className="">
          <Card.Title className="text-light fw-bold">{item}</Card.Title>
        </Row>
        <Row className="">
          <Card.Text className="text-light">{desc}</Card.Text>
        </Row>
        <Row className="pt-4 align-self-bottom">
          <h4 className="text-light">
            {"£"}
            {price.toFixed(2)}{" "}
            <Button
              className="text-light align-middle fw-bold "
              variant="outline-dark"
            >
              <Image src={plus} roundedCircle />
            </Button>
          </h4>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;
