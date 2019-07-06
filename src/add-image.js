import dog from "./IMG_5665.JPG";

function addImage() {
  const img = document.createElement("img");
  img.alt = "dog";
  img.width = 300;
  img.src = dog;

  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
