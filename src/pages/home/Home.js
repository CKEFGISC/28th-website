import "./Home.scss";
import About from "./sections/About";

import Intro from "./sections/Intro";
import Map from "./sections/Map";

export default function Home() {
  return (<>
    <Intro />
    <Map />
    <About />
  </>);
}