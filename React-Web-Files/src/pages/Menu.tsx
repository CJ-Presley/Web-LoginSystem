import { useEffect } from "react";
import MenuCard from "../components/MenuCards";

function Menu() {
  useEffect(() => {
    document.title = "Bean & Brew | Menu";
  });
  return (
    <>
      <MenuCard
        item="yudsfg"
        type="drink"
        desc="jhbdfljhsbdflskdflsjkdbfgjksdvg"
        price={2.32}
        url="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-11-Pepperoni-Bread%2Fpepperoni-bread-1"
      />
    </>
  );
}
export default Menu;
