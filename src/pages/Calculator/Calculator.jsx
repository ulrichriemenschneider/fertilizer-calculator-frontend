import ChildBox from "../../components/ChildBox/ChildBox";
import CustomBox from "../../components/CustomBox/CustomBox";
import "./Calculator.css";

function Calculator() {
  return (
    <>
      <h1>Calculator</h1>
      <CustomBox content="Zugtickets nach süden" price={5}>
        <ChildBox />
      </CustomBox>
    </>
  );
}

export default Calculator;
