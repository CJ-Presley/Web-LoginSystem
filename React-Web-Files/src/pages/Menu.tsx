import React, { useEffect, useState } from "react";
import MenuCard, { MenuCardProps } from "../components/MenuCards";
import axios from "axios";
import { MENU_URL } from "../constants/APIconstants";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Placeholder,
  Row,
} from "react-bootstrap";
import { ArrowRight } from "@carbon/react/icons";
import PlaceholderImg from "../assets/placeholder.png";

function Menu() {
  const [menuCards, setMenuCards] = useState([]);
  useEffect(() => {
    document.title = "Bean & Brew | Menu";
  });
  useEffect(() => {
    const getMenu = async () => {
      const response = await axios.get(MENU_URL);
      console.log(response?.data);
      const menuItems = response?.data["menuItems"];
      console.log(menuItems);
      setMenuCards(
        menuItems.map((menuItem: MenuCardProps) => (
          <MenuCard
            key={menuItem.item}
            item={menuItem.item}
            type={menuItem.type}
            desc={menuItem.desc}
            price={menuItem.price}
            url={menuItem.url}
          />
        ))
      );
      console.log(menuCards);
    };
    getMenu();
  }, []);

  return (
    <>
      <Container>
        <h1 className="my-3 fw-bold text-center">Menu</h1>
        <Col className="border-bottom my-3"></Col>
        <div className="mx-5 px-5">
          <Col className="mx-5">
            <Row>
              {menuCards}
              <Col className="my-2 mx-1 px-4">
                <Card
                  className="border-rounded border-light"
                  bg="dark"
                  style={{ width: "18rem", height: "26rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={PlaceholderImg}
                    max-height="300"
                  />
                  <Card.Body className="pb-5">
                    <Placeholder
                      as={Card.Title}
                      animation="glow"
                      className="text-light"
                    >
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder
                      as={Card.Text}
                      animation="glow"
                      className="text-secondary"
                    >
                      <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                      <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Container className="py-2 pb-4 mx-1 px-1 text-secondary position-absolute bottom-0 fw-bold fs-5">
                      <Placeholder className="m-2" animation="glow">
                        <Placeholder xs={3} />{" "}
                      </Placeholder>
                      <Placeholder.Button variant="warning" xs={6} />
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </div>
        <Container>
          <Row className="py-3">
            <Col></Col>
            <Col xs={2}>
              <Button className="fw-bold text-dark" variant="warning">
                <ArrowRight className="fw-bold mx-5" />
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Menu;

/*
  const buttonTags = buttons.map((button) => (
    <button
      type="button"
      key={button}
      onClick={() => handleButtonClick(button)}
    >
      {button}
    </button>
  ));
*/
