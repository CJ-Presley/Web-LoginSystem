import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import plus from "../assets/icons8-plus-48.png";
import { Row, Col } from "react-bootstrap";
// import { IconButton } from "@carbon/react";
// import { Add } from "@carbon/react/icons";

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
      <Card.Img variant="top" src={url} height="200" width="800" />
      <Card.Body>
        <Card.Title className="text-light fw-bold">{item}</Card.Title>
        <Card.Text className="mb-5 pb-3 text-light">{desc}</Card.Text>
        <h4 className="text-light position-absolute bottom-0">
          {"£"}
          {price.toFixed(2)}{" "}
          <Button
            className="text-light align-middle fw-bold "
            variant="outline-dark"
          >
            <Image src={plus} roundedCircle />
          </Button>
        </h4>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;
