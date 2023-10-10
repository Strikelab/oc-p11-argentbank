import React from "react";
import Header from "../../Containers/Header/Header";
import Accounts from "../../Containers/Accounts/Accounts";
import "./user.scss";

function User() {
  return (
    <main className="main bg-dark">
      <Header />
      <h2 className="sr-only">Accounts</h2>
      <Accounts />
    </main>
  );
}

export default User;
