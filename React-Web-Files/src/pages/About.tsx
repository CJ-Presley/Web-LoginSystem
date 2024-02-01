import { useEffect } from "react";
import { Container } from "react-bootstrap";

function About() {
  useEffect(() => {
    document.title = "Bean & Brew | About";
  });
  return (
    <>
      <Container></Container>
    </>
  );
}
export default About;
