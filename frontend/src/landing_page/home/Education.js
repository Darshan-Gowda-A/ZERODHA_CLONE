import React from "react";
function Education() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <img src="media/education.svg" style={{ width: "60%" }} />
        </div>

        <div className="col-5">
          <div className="row">
            <div className="col p-3 ">
              <h2 className="mb-3">Free and open market education</h2>
              <p className="mb-3">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <a href="" style={{ textDecoration: "none" }}>
                Varsity
              </a>
              <p>
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a href="" style={{ textDecoration: "none" }}>
                TradingQ&A
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
