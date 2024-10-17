import React from "react";
import "../../styles/ticket.css";

function Main() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a style={{textDecoration:"none"}} href="">Track Tickets</a>
      </div>
      <div className="row p-5 ">
        <div className="col-6  p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          
          </h1>
            <br />

          <input placeholder="Eg. how do I activate F&O" />
          <br /> <br /><br />
          <a style={{textDecoration:"none"}}href="">Track account opening</a>
          <br />

          <a style={{textDecoration:"none"}} href="">Track segment activation</a>
          <br />
          <a style={{textDecoration:"none"}} href="">Intraday margins</a>
          <br />
          <a  style={{textDecoration:"none"}}href="">Kite user manual</a>
          <br />
        </div>
        
      </div>
    </section>
  );
}

export default Main;