import { Carousel } from "react-bootstrap";
import Img1 from "../assets/bbb1.jpg";
import Img2 from "../assets/ci1.png";
import Img3 from "../assets/b+b.jpg";

function HomeCar() {
  return (
    <>
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <img
            height="950"
            className="d-block w-100"
            src={Img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="950"
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="950"
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default HomeCar;
