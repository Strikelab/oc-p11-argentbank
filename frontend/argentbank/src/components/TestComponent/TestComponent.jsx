import React from "react";
import { useDispatch } from "react-redux";
import { toggleConnexion, firstTest } from "../../store";
import Button from "../Button/Button";
import "./test-component.scss";

function TestComponent() {
  // function handleClick() {

  const dispatch = useDispatch();
  return (
    <div className="test-component">
      <p>
        <i className="fa-solid fa-triangle-exclamation"></i>
        <span>TestComponent</span>
        <i className="fa-solid fa-triangle-exclamation"></i>
      </p>

      <Button
        handleClick={() => dispatch(toggleConnexion())}
        buttonText={"Click ME !!"}
        className="edit-username-button"
      ></Button>
      <button onClick={() => dispatch(firstTest("ma nouvelle valeur"))}>
        SImple Button
      </button>
    </div>
  );
}

export default TestComponent;
