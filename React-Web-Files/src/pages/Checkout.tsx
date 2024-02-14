import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemCards, { ItemCardProps } from "../components/itemsCard";
import axios from "axios";
import MenuCard, { MenuCardProps } from "../components/MenuCards";
import { MENU_URL } from "../constants/APIconstants";

function Checkout() {
  const [itemCards, setItemCards] = useState([]);
  useEffect(() => {
    document.title = "Bean & Brew | Checkout";
  });
  useEffect(() => {
    const getMenu = async () => {
      const response = await axios.get(MENU_URL);
      console.log(response?.data);
      const items = response?.data["menuItems"];
      console.log(items);
      setItemCards(
        items.map((item: ItemCardProps) => (
          <ItemCards
            key={item.item}
            item={item.item}
            desc={item.desc}
            price={item.price}
            url={item.url}
          />
        ))
      );
      console.log(itemCards);
    };
    getMenu();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <h1 className="my-3 fw-bold text-center">Checkout</h1>
        </Row>
        <Container>
          <Row className="my-4">
            <Col className="py-2 rounded-corners-border">{itemCards}</Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Checkout;
