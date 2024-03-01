import { Badge, Col, Placeholder, Row } from "react-bootstrap";
import "../css/components.css";

export interface ItemCardProps {
  item: string;
  quantity: number;
  price: number;
  url: string;
}

function ItemCards({ item, quantity, price, url }: ItemCardProps) {
  return (
    <>
      <div className="fw-bold text-light rounded-corners-dark my-2 rounded-corners-border">
        <Row>
          <Col xs={2}>
            <img
              src={url}
              alt="product-image"
              className="rounded rounded-corners-border"
              height="80"
              width="80"
            />
          </Col>
          <Col xs={6}>
            <h6 className="py-4 text-light fw-bold">
              <span className="text-white-50 fs-6 fw-light">{quantity}x </span>
              {item}
            </h6>
          </Col>
          <Col className="text-white-50 fw-bold fs-5 text-center py-4">
            £{price.toFixed(2)}
          </Col>
        </Row>
      </div>
    </>
  );
}
export default ItemCards;
