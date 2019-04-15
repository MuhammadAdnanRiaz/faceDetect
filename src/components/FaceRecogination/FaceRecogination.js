import React from "react";
import './facerecog.css';

const FaceRecogination = ({imageURL,box}) => {
  return (
    <div className="ma" style={{display:'flex',justifyContent:'center'}}>
      <div className="absolute mt2">
        <img id="faceImages"
          src={imageURL}
          alt=""
          width="500px"
          height="auto"
        />
        <div className="bounding_box" style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}} >
        {console.log(box)}</div>
      </div>
    </div>
  );
};

export default FaceRecogination;
