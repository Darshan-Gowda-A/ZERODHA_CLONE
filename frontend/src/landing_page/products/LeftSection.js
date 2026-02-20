import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5 p-3">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>
        <div className="col-3 p-3 mt-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo →
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "60px", textDecoration: "none" }}
            >
              Learn More →
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img
                src="media/googlePlayBadge.svg"
                style={{ width: "40%" }}
              />{" "}
            </a>
            <a href={appStore} style={{ textDecoration: "none" }}>
              <img src="media/appstoreBadge.svg" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
