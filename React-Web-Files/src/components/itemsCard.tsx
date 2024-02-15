import { Badge, Col, Placeholder, Row } from "react-bootstrap";
import "../css/components.css";

export interface ItemCardProps {
  item: string;
  desc: string;
  price: number;
  url: string;
}

function ItemCards({ item, desc, price, url }: ItemCardProps) {
  return (
    <>
      <div className="fw-bold text-light rounded-corners-dark my-2">
        <Row>
          <Col xs={2}>
            <img
              src={url}
              alt="product-image"
              className="rounded"
              height="80"
              width="80"
            />
          </Col>
          <Col xs={6}>
            <h6 className="py-4 text-light fw-bold">{item}</h6>
          </Col>
          <Col className="text-white-50 fw-bold fs-6 text-center py-4">
            £{price.toFixed(2)}
          </Col>
        </Row>
      </div>
    </>
  );
}
export default ItemCards;


