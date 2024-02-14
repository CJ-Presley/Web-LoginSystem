import { FormEvent, useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { AccountDetailsContext } from "./accountProvider";
function LoginForm() {
  useEffect(() => {
    document.title = "Bean & Brew | Login";
  });
  const accountDetailsContext = useContext(AccountDetailsContext);
  const themeContext = useContext(ThemeContext);
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResponseText("");
    if (!username.match(/^[0-9a-zA-Z]+$/)) {
      setResponseText("Username Not Alphanumeric");
      return;
    }
    if (
      !password.match(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^_&-+=]+){5,16}$/
      )
    )
      console.log(password);
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      setResponseText(response.data["message"]);
      // console.log(response?.data)
      if (response?.data["success"]) {
        accountDetailsContext?.setAccountDetails({
          username,
          password,
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setResponseText(error.message);
      } else {
        setResponseText(String(error));
      }
    }
  };

  return (
    <>
      <Row>
        <Col className="mt-5" />
      </Row>
      <MDBContainer fluid className="mb-5">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 mb-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      id="username"
                      required
                      type="text"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          id="password"
                          required
                          type={showPass ? "text" : "password"}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Show Password"
                      onChange={() => setShowPass((prev) => !prev)}
                    />
                  </Form.Group>
                  <Row>
                    <Col className="d-grid gap-2">
                      <Button
                        variant="dark"
                        type="submit"
                        className="border border-light"
                      >
                        Login
                      </Button>
                    </Col>
                  </Row>
                  {responseText && (
                    <p className="text-white text-center">Response: {responseText}</p>
                  )}
                  <Row>
                    <Col>
                      <p>
                        Don't have an account?{" "}
                        <a href="/signup" className="text-primary">
                          Create one
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default LoginForm;
