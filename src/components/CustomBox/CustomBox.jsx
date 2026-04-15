import "./CustomBox.css";

function CustomBox(props) {
  return (
    <div className="custom-box">
      <p>Custom Box Content</p>
      <p>{props.content}</p>
      <p>{props.price}</p>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default CustomBox;
