import React from "react";
import "./account.scss";
import Button from "../Button/Button";

function Account(props) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.title}</h3>
        <p className="account-amount">{props.amount}</p>
        <p className="account-amount-description">{props.description}</p>
      </div>
      <Button className="transaction-button" buttonText="View transactions" />
    </section>
  );
}

export default Account;
