import "./heading.scss";

class Heading {
  render(pageName) {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body");
    h1.innerHTML = "Hello World. This page is " + pageName;
    body.appendChild(h1);
  }
}

export default Heading;
