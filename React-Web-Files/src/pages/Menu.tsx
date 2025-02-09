import { useEffect, useState } from "react";
import MenuCard, { MenuCardProps } from "../components/MenuCards";
import axios from "axios";
import { MENU_URL } from "../constants/APIconstants";
import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";
import PlaceholderImg from "../assets/placeholder.png";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [basket, setBasket] = useState({ Latte: 3, Muffin: 2 });

  useEffect(() => {
    document.title = "Bean & Brew | Menu";
  });
  useEffect(() => {
    const getMenu = async () => {
      const response = await axios.get(MENU_URL);
      console.log(response?.data);
      setMenuItems(response?.data["menuItems"]);
    };
    getMenu();
  }, []);

  return (
    <>
      <Container>
        {/* <p>{JSON.stringify(basket)}</p> */}
        <div className="mx-5 px-5">
          <Col className="mx-5">
            <Row>
              {menuItems.map((menuItem: MenuCardProps) => (
                <MenuCard
                  item={menuItem.item}
                  desc={menuItem.desc}
                  type={menuItem.type}
                  price={menuItem.price}
                  url={menuItem.url}
                />
              ))}
              <Col className="my-2 mx-3 px-1">
                <Card
                  className="border-rounded border-light"
                  bg="dark"
                  style={{ width: "19rem", height: "21rem" }}
                >
                  <Card.Img variant="top" src={PlaceholderImg} height="800" />
                  <Card.ImgOverlay>
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
                      <Container className="py-3 pb-4 mx-1 px-1 text-secondary position-absolute bottom-0 fw-bold fs-5">
                        <Placeholder className="m-2" animation="glow">
                          <Placeholder xs={3} />{" "}
                        </Placeholder>
                        <Placeholder.Button variant="warning" xs={6} />
                      </Container>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Col>
        </div>
      </Container>
    </>
  );
}
export default Menu;
