import Heading from "./components/heading/heading";
import helloWorld from "./components/hello-world-button/hello-world-button";
import React from "react";

const heading = new Heading();
heading.render("hello");
const helloworld = new helloWorld();
helloworld.render();

//addImage();
if (process.env.NODE_ENV === "production") {
  console.log("production");
} else if (process.env.NODE_ENV === "development") {
  console.log("development");
} else {
  console.log("none");
}
