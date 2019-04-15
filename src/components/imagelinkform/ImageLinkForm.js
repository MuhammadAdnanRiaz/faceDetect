import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmitClick }) => {
  return (
    <div>
      <p className="f3 " style={{ display: "flex", justifyContent: "center" }}>
        {"This Magic brian will detect faces from your pictures.give it a try"}
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="form pa4 br3 shadow-5">
          <input
            className="w-70 pa2 f4 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link dib ph3 pv2 white bg-light-purple pointer"
            onClick={onSubmitClick}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
