import React from "react";
import {} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConnexionFlag, setToken, setUserProfile  } from "../../store";
import Button from "../Button/Button";
import "./test-component.scss";

function TestComponent() {

  const dispatch = useDispatch();
  //eslint-disable-next-line
  const API_PATH = process.env.REACT_APP_API_PATH || "http://localhost:3001/api/v1";

  const handleSubmit = () => {
    const requestBody = {
      "email": "tony@stark.com",
      "password": "password123",
    };
    const requestEndpoint = "/user/login";
    const requestUrl = API_PATH + requestEndpoint;
    const requestHeaders = {
      "Content-Type": "application/json",
    };

    fetch(requestUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.body.token;
        dispatch(setToken(token));
        getUserDatas(token);
      });
  };
  const getUserDatas = (token) => {
    // const requestBody = {};
    const requestHeader = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Authorization":
        `Bearer ${token}` 
    };

    const requestEndPoint = "/user/profile";
    const requestUrl = API_PATH + requestEndPoint;
    fetch(requestUrl, {
      method: "POST",
      headers: requestHeader,
    })
      .then((res) => {
       return res.json();
      })
      .then((json) => {
        const userProfile = json.body
        dispatch(setUserProfile(userProfile))
        });
  };

  const maVarTest = useSelector((state) => state.isConnected);

  return (
    <div className="test-component">
      <p>
        <i className="fa-solid fa-triangle-exclamation"></i>
        <span>TestComponent</span>
        <i className="fa-solid fa-triangle-exclamation"></i>
      </p>

      <Button
        handleClick={() => dispatch(setConnexionFlag())}
        buttonText={maVarTest ? "True" : "False"}
        className="edit-username-button"
      ></Button>
      {/* <button onClick={() => dispatch(firstTest("ma nouvelle valeur"))}> */}
      <button onClick={() => handleSubmit()}>Simple Button</button>
    </div>
  );
}

export default TestComponent;
