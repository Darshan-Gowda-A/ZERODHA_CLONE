import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <h2>Kiaan couldn’t find that page</h2>
        <p>
          We couldn’t find the page you were looking for. Visit Zerodha’s home
          page
        </p>
        <Link to="/"> GoHome </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
