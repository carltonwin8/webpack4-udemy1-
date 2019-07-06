import Heading from "./components/heading/heading";
import Dog from "./components/dog-image/dog-image";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("dog"));
const dog = new Dog();
dog.render();
