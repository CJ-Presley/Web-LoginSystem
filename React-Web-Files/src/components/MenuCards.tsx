import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import plus from "../assets/icons8-plus-48.png";
import { Row, Col, Container, Badge } from "react-bootstrap";
import { Add } from "@carbon/react/icons";
import { useState } from "react";
// import { Add } from "@carbon/react/icons";

export interface MenuCardProps {
  item: string;
  type: string;
  desc: string;
  price: number;
  url: string;
}

interface Item {
  name: string;
  quantity: number;
}

function MenuCard({ item, type, desc, price, url }: MenuCardProps) {
  const [items, setItems] = useState<Item[]>([]);

  const handleItemClick = (name: string) => {
    const updatedItems = items.map((item) => {
      if (item.name === name) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);

  };
  return (
    <Col className="my-2 mx-3 px-1">
      <Card
        className="border-rounded border-light"
        bg="dark"
        style={{ width: "18rem", height: "26rem" }}
      >
        <Card.Img variant="top" src={url} height="300" />
        <Card.Body className="pb-5">
          <Card.Title className="text-light fw-bold">
            <Row>
              <h5>
                {item}
                <Badge className="mx-2" bg="danger" pill>
                  {type}
                </Badge>
              </h5>
            </Row>
          </Card.Title>
          <Card.Text className="mb-5 text-light">{desc}</Card.Text>
          <Container className="py-2 pb-4 mx-1 px-1 text-white-50 position-absolute bottom-0 fw-bold fs-5">
            £{price.toFixed(2)}
            <Button
              className="text-light fw-bold px-4 mx-4"
              variant="outline-warning"
              //onClick=""
            >
              <h6 className="my-1 px-2">Pre-Order</h6>
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MenuCard;
