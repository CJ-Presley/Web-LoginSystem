import React, { useEffect, useState } from "react";
import MenuCard, { MenuCardProps } from "../components/MenuCards";
import axios from "axios";
import { MENU_URL } from "../constants/APIconstants";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowRight } from "@carbon/react/icons";

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
            <Row fluid>{menuCards}</Row>
          </Col>
        </div>
        <Container>
          <Row className="pb-4">
            <Button className="fw-bold" variant="success">
              Next <ArrowRight className="fw-bold" />
            </Button>
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
