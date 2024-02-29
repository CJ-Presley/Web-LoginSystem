import { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AccountDetailsContext } from "../components/accountProvider";
import { useNavigate } from "react-router-dom";
import { INDEX_PATH } from "../constants/paths";
import DashCard from "../components/DashboardCard";
import PlaceholderCard from "../components/placeholderCard";

function Dash() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Bean & Brew | Staff Dashboard";
    console.log(accountDetailsContext?.accountDetails?.role);
    if (Number(accountDetailsContext?.accountDetails?.role) < 1) {
      console.log("Redirecting");
      navigate(INDEX_PATH);
    } else if (accountDetailsContext?.accountDetails?.role === undefined) {
      console.log("Redirecting");
      navigate(INDEX_PATH);
    }
  });

  const accountDetailsContext = useContext(AccountDetailsContext);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <PlaceholderCard />
          </Col>
          <Col>
            <PlaceholderCard />
          </Col>
          <Col>
            <DashCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <DashCard />
          </Col>
          <Col>
            <DashCard />
          </Col>
          <Col>
            <PlaceholderCard />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <PlaceholderCard />
          </Col>
          <Col>
            <DashCard />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <DashCard />
          </Col>
          <Col>
            <PlaceholderCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Dash;
