import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";

const splideElement = document.querySelector(".splide");
if (splideElement) {
  new Splide(splideElement, { rewind: true }).mount();
}
