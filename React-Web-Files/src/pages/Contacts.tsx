import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeedsContacts from "../components/LeedsConCard";
import KnaresboroughContacts from "../components/KnaresboroughConCard";
import HarrogateContacts from "../components/HarrogateConCard";

function Contacts() {
  useEffect(() => {
    document.title = "Bean & Brew | Contacts";
  });
  return (
    <>
      <Container>
        <Row>
          <h1 className="my-3 fw-bold text-center">Contact Us</h1>
        </Row>
        <Row>
          <p className="text-center fw-bold">
            <a
              href="https://super-space-orbit-r9pr4g65v6w3qg5-5173.app.github.dev/contacts#:~:text=Kingdom%2C%0AUNDR%20W473R-,Harrogate,-Contact%20Number%3A"
              className="px-5 mx-5"
            >
              Harrogate
            </a>
            -
            <a
              href="https://super-space-orbit-r9pr4g65v6w3qg5-5173.app.github.dev/contacts#:~:text=Leeds%2DKnaresborough-,Leeds,-Contact%20Number%3A"
              className="px-5 mx-5"
            >
              Leeds
            </a>
            -
            <a
              href="https://super-space-orbit-r9pr4g65v6w3qg5-5173.app.github.dev/contacts#:~:text=Kingdom%2C%0AP4RK%20P0N9-,Knaresborough,-Contact%20Number%3A"
              className="px-5 mx-5"
            >
              Knaresborough
            </a>
          </p>
        </Row>
        <LeedsContacts />
        <HarrogateContacts />
        <KnaresboroughContacts />
      </Container>
    </>
  );
}
export default Contacts;
