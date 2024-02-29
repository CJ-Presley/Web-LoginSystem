import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardOverlay,
} from "mdb-react-ui-kit";
import { Row, Col, Container, Badge } from "react-bootstrap";
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
    <Col className="pt-1">
      <MDBCard
        className="border-rounded border-light"
        bg="dark"
        style={{ width: "20rem", height: "20rem" }}
      >
        <MDBCardImage
          src={url}
          height="350"
          className="darkened-image rounded"
          position="top"
        />
        <MDBCardOverlay>
          <MDBCardBody className="pb-5 mask">
            <MDBCardTitle className="text-light fw-bold">
              <Row>
                <h5 className="fw-bold">
                  {item}
                  <Badge className="mx-2" bg="danger" pill>
                    {type}
                  </Badge>
                </h5>
              </Row>
            </MDBCardTitle>

            <MDBCardText className="mb-5 text-light">{desc}</MDBCardText>
            <Container className="py-2 pb-4 mx-1 px-1 text-white position-absolute bottom-0 fw-bold fs-5">
              £{price.toFixed(2)}
              <Button
                className="text-light fw-bold px-4 mx-4"
                variant="outline-warning"
                //onClick=""
              >
                <h6 className="my-1 px-2">Pre-Order</h6>
              </Button>
            </Container>
          </MDBCardBody>
        </MDBCardOverlay>
      </MDBCard>
    </Col>
  );
}

export default MenuCard;

{
  /*

export default function App() {
  return (
    
      'https://mdbootstrap.com/img/new/standard/nature/184.webp'  alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
*/
}
