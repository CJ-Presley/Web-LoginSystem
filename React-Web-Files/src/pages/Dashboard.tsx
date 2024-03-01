import { useContext, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AccountDetailsContext } from "../components/accountProvider";
import { useNavigate } from "react-router-dom";
import { INDEX_PATH } from "../constants/paths";
import DashCard from "../components/DashboardCard";
import PlaceholderCard from "../components/placeholderCard";
import StaffSignupForm from "../components/StaffSignupForm";

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
            <div className="py-2 d-flex justify-content-around">
              <Col>
                <Card
                  className="bg-dark text-light pt-3"
                  style={{ height: "225px" }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bold">Card Title</Card.Title>
                    <Card.Text className="fw-bold">
                      Staff account creation
                      <p></p>
                      <p className="fs-6 text-danger fw-light">
                        *warning: this dashboard is meant for adminstartors only
                      </p>
                    </Card.Text>
                    <Button
                      href="/Y4p4fpZFUSkcbESGW23x"
                      variant="outline-warning"
                    >
                      Create Staff Account
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </div>
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
