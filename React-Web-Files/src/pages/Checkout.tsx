import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemCards, { ItemCardProps } from "../components/itemsCard";
import axios from "axios";
import MenuCard, { MenuCardProps } from "../components/MenuCards";
import { MENU_URL } from "../constants/APIconstants";

const BASKET = { Muffin: 1, Chai: 1, Latte: 1, "Choc Hamper": 1 };

function Checkout() {
  const [totalCost, setTotalCost] = useState(0);
  const [itemCards, setItemCards] = useState<ReactNode[]>([]);

  useEffect(() => {
    document.title = "Bean & Brew | Checkout";
  });
  useEffect(() => {
    const getMenu = async () => {
      const response = await axios.get(MENU_URL);
      console.log(response?.data);
      const items = response?.data["menuItems"];
      console.log(items);

      console.log("Menu items: " + items);

      const tempItemCards: ReactNode[] = [];
      let tempTotalCost = 0;

      items.forEach((item: ItemCardProps) => {
        if (item.item in BASKET) {
          console.log(itemCards);
          console.log(item.item + " is in the basket.");
          tempItemCards.push(
            <ItemCards
              key={item.item}
              item={item.item}
              desc={item.desc}
              price={item.price}
              url={item.url}
            />
          );
          tempTotalCost +=
            item.price * BASKET[item.item as keyof typeof BASKET];
        }
        setItemCards(tempItemCards);
        setTotalCost(tempTotalCost);
      });
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
      <p>{totalCost}</p>
    </>
  );
}
export default Checkout;

{
  /*
 
useEffect(() => {

menuItems.forEach((menuItem) => {

	const itemName = menuItem?.name;

	if(itemName in basket) {

		setItemCards([...itemCards, <ItemCard name={itemName} ... quantity: {basket[itemName]} />);

		setTotalCost(totalCost + (menuItem["price"] * basket[itemName]));

	}

});

}, [basket]); */
}
