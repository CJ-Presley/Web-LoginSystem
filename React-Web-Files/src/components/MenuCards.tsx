import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import plus from "../assets/icons8-plus-48.png";

interface MenuCardProps {
  item: string;
  type: string;
  desc: string;
  price: number;
  url: string;
}

function MenuCard({ item, type, desc, price, url }: MenuCardProps) {
  return (
    <Card className="my-4 mx-3" bg="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title className="text-light fw-bold">{item}</Card.Title>
        <Card.Text className="text-light">{desc}</Card.Text>
        <h4 className="text-light">
          {"£"}
          {price}{" "}
          <Button
            className="text-light align-middle fw-bold"
            variant="outline-dark"
          >
            <Image src={plus} rounded />
          </Button>
        </h4>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;
