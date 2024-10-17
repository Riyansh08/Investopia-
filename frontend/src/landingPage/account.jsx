import React from "react";

function Account() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a <span> <b>INVESTOPIA</b></span> account</h1>
        <p>
          Modern website and great learning experience
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Account;