import React from "react";
import "./accounts.scss";
import Account from "../Account/Account";
const accounts = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    amountDescription: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    amountDescription: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    amountDescription: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    amountDescription: "Current Balance",
  },
];

function Accounts() {
  return (
    <>
      {accounts.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.amountDescription}
        />
      ))}
    </>
  );
}

export default Accounts;
