import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-12 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
            
          </a>
          <br />
          <br /><br />
          <div style={{textAlign:""}}>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹ 0 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹ 0 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.0% or ₹ 0 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.0% or ₹ 0 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹ 0 per executed order instead of ₹ 0 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
           
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;