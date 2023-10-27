import React, {useRef} from "react";
import {useNavigate }from "react-router-dom";
import { setToken, setConnexionFlag, setUserProfile } from "../../store";
import Button from "../../components/Button/Button";
import "./sign-in.scss";
import { useDispatch } from "react-redux";

function SignIn() {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const form =  useRef();
  const API_URL=process.env.REACT_APP_API_PATH  //eslint-disable-line no-undef

  const handleSubmit = (e)=>{
    e.preventDefault()
    const requestEndPoint = "/user/login";
    const requestUrl = API_URL+requestEndPoint
    const email = form.current[0].value
    const password = form.current[1].value
    const requestHeaders = {
      "Content-Type": "application/json",
    };
    const requestBody = {
      email:email,
      password:password,
      }
      fetch(requestUrl, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: requestHeaders,
      })
        .then((res) => res.json())
        .then((data) => {
        const token = data.body.token;
        dispatch(setToken(token));
        dispatch(setConnexionFlag(true))
        navigate("/profile")
          getUserDatas(token);
        // });
  })

}
const getUserDatas = (token) => {
  // const requestBody = {};
  const requestHeader = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "Authorization":
      `Bearer ${token}` 
  };

  const requestEndPoint = "/user/profile";
  const requestUrl = API_URL + requestEndPoint;
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
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={form} onSubmit={(e)=>handleSubmit(e)} autoComplete="off">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
     
          
            <Button type="submit" className="sign-in-button" buttonText="Sign In" />
          
     
        </form>
      </section>
    </main>
  );
}

export default SignIn;
