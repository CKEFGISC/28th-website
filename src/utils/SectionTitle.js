import Row from "./Row";

export default function SectionTitle(props) {
  return (
    <Row>
      <div className="section-title col-md-8 offset-md-2 text-center" {...props}>
        <div>{props.children}</div>
      </div>
    </Row>
  );
}
