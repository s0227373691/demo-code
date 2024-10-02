import ProgressBar from "react-bootstrap/ProgressBar";

function Tracker(props) {
  return (
    <div className="pb-3">
      <div className="tracker-color d-flex justify-content-between pb-2">
        <span className="fw-bold fs-5">{props.name}</span>
        <span className="d-flex align-items-end">{props.count}</span>
      </div>
      <ProgressBar now={props.len} />
      <div className="d-flex justify-content-between pt-2 text-secondary">
        <span>{props.start}</span>
        <span>{props.end}</span>
      </div>
    </div>
  );
}

export default Tracker;
