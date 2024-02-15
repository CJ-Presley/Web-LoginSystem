import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemCards, { ItemCardProps } from "../components/itemsCard";
import axios from "axios";
import MenuCard, { MenuCardProps } from "../components/MenuCards";
import { MENU_URL } from "../constants/APIconstants";

const BASKET = { Muffin: 1, "Veg Pasty": 1, Chai: 1, Latte: 4 };

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

      setItemCards([]);
      items.forEach((item: ItemCardProps) => {
        if (item.item in BASKET) {
          console.log(item.item + " is in the basket.");
          setItemCards([
            ...itemCards,
            <ItemCards
              key={item.item}
              item={item.item}
              desc={item.desc}
              price={item.price}
              url={item.url}
            />,
          ]);
          setTotalCost(
            totalCost + item.price * BASKET[item.item as keyof typeof BASKET]
          );
        }
      });

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
