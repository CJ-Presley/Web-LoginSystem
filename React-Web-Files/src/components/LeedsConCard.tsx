import { Row, Col } from "react-bootstrap";

function LeedsContacts() {
  return (
    <>
      <div className="py-5">
        <Row className="py-3 border border-white-50 rounded">
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2356.661372300967!2d-1.5628011871094991!3d53.79551427230796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDQ3JzQzLjkiTiAxwrAzMyczNi44Ilc!5e0!3m2!1sen!2suk!4v1706700948238!5m2!1sen!2suk"
              width="600"
              height="450"
              loading="lazy"
              className=""
            ></iframe>
          </Col>
          <Col>
            <h2 className="fw-bold text-center underline">Leeds</h2>
            <Row className="pt-5">
              <h4 className="fw-bold">
                <p className="text-secondary">
                  Contact Number:{" "}
                  <a href="tel: 01632 960592" className="text-dark fw-bold">
                    01632 960592
                  </a>
                </p>
              </h4>
            </Row>
            <Row>
              <h4 className="fw-bold">
                <p className="text-secondary">
                  Email Address:{" "}
                  <a
                    className="text-dark"
                    href="mailto: contact.leeds@bean&brew.coffee.uk"
                  >
                    contact.us@bean&brew.coffee.uk
                  </a>
                </p>
              </h4>
            </Row>
            <Row>
              <Col>
                <h4 className="fw-bold">
                  <p className="text-secondary">Address: </p>
                </h4>
              </Col>
              <Col xs={9}>
                <h4 className="fw-bold text-left">
                  <a
                    className="text-dark "
                    href="https://maps.app.goo.gl/M6vBGQ5xjtpV18oe8"
                  >
                    Bean & Brew Coffee Ltd,
                    <br />
                    The River Aire, Leeds,
                    <br />
                    England, United Kingdom,
                    <br />
                    UNDR W473R
                  </a>
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default LeedsContacts;
