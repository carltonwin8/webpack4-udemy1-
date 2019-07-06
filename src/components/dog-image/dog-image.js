import dog from "./IMG_5665.JPG";
import "./dog-image.scss";

class DogImage {
  render() {
    const img = document.createElement("img");
    img.alt = "dog";
    img.src = dog;
    img.classList.add("dog-image");

    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default DogImage;
