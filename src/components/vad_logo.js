import React from "react";

const VadLogo = ({ logoImage }) => {
  return (
    <div style={{ position: "absolute", top: "0px", left: "-25px" }}>
      <img
        src={logoImage}
        alt="VAD Logo"
        style={{ width: "250px", height: "auto" }}
      />
    </div>
  );
};

export default VadLogo;
