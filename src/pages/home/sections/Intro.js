import Row from "../../../utils/Row";
import Scroll from "../../../utils/Scroll";
import "./Intro.scss";

export default function Intro() {
  return (
    <section id="intro">
      <div className="p-5s jumbotron">
        <div className="container">
          <Row>
            <div className="col-md-12">
              <h1>建北電資</h1>
              <h2>一個跨越 <span onClick={() => window.location.assign("/#/ctf/8LtypldESoQjkZ1OMjp0AMfG/")}>28</span> 年的大家庭</h2>
              <Scroll to="#map" className="btn btn-outline-warning">關於我們</Scroll>
            </div>
          </Row>
        </div>
      </div>
    </section>
  );
}
