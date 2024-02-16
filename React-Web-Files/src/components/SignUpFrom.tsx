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
import { useNavigate } from "react-router-dom";
import { INDEX_PATH } from "../constants/paths";
function SignupForm() {
  useEffect(() => {
    document.title = "Bean & Brew | Sign Up";
  });
  const accountDetailsContext = useContext(AccountDetailsContext);
  const themeContext = useContext(ThemeContext);
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [dob, setDOB] = useState("");
  const [password, setPassword] = useState("");
  const [responseText, setResponseText] = useState("");
  const [surname, setSurname] = useState("");
  const [forename, setForename] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResponseText("");
    if (!username.match(/^[0-9a-zA-Z]+$/)) {
      setResponseText("Username Not Alphanumeric");
      return;
    }
    if (password !== confirmPass) {
      setResponseText("Passwords Do Not Match");
      return;
    }
    if (
      !password.match(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^_&-+=]+){5,16}$/
      )
    ) {
      setResponseText(
        "Password Must Contain:\n- 1 Uppercase Character\n- 1 Lowercase Character\n- 1 Number"
      );
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        forename: forename,
        surname: surname,
        dob: dob,
        username: username,
        password: password,
      });
      setResponseText(response.data["message"]);
      // console.log(response?.data);
      // if success == true : set password + username -> accountDetails
      if (response?.data["success"]) {
        accountDetailsContext?.setAccountDetails({
          username,
          password,
          role: response?.data["role"],
        });
        navigate(INDEX_PATH);
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
        <Col className="py-5" />
      </Row>
      <MDBContainer fluid className="">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="pt-5 mb-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                <p className="text-white-50">
                  Please enter your details below!
                </p>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          id="forename"
                          required
                          type="text"
                          placeholder="Enter forename"
                          onChange={(e) => setForename(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          id="surname"
                          required
                          type="text"
                          placeholder="Enter surname"
                          onChange={(e) => setSurname(e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      required
                      name="dob"
                      placeholder="Date of Birth"
                      onChange={(e) => setDOB(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      id="username"
                      required
                      type="text"
                      placeholder="Enter username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicPassword">
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
                      <Col>
                        <Form.Control
                          id="confirmpassword"
                          required
                          type={showPass ? "text" : "password"}
                          placeholder="Confirm Password"
                          onChange={(e) => setConfirmPass(e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Show Password"
                      onChange={() => setShowPass((prev) => !prev)}
                    />
                  </Form.Group>
                  <Row>
                    <Col className="d-grid gap-2">
                      <Button
                        variant="success"
                        type="submit"
                        className="border border-dark "
                      >
                        Sign Up
                      </Button>
                    </Col>
                  </Row>

                  {responseText && (
                    <p className="text-white">Response: {responseText}</p>
                  )}
                  <Row>
                    <Col>
                      <p className="text-center pt-3">
                        Login?{" "}
                        <a href="/login" className="text-primary">
                          Go Here
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
export default SignupForm;
