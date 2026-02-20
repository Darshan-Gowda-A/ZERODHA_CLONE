import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-1"></div>
        <div className="col-3 p-3" style={{ marginTop: "100px" }}>
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More →
            </a>
          </div>
        </div>

        <div className="col-1"></div>

        <div className="col-5 p-3">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
