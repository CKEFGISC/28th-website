import "./Events.scss";

import Alive from "./sections/Alive";
import Planning from "./sections/Planning";

export default function Events() {
  return (<>
    <section id="title-bar">
      活動與資源
    </section>
    <Alive />
    <Planning />
  </>);
}