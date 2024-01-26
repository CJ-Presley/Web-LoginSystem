import { useEffect } from "react";
import HomeCar from "../components/CarouselHome"

function Home() {
    useEffect(() => {
      document.title = "Bean & Brew | Home";
    });
  return <><HomeCar/></>;
}
export default Home;
