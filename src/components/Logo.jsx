import React from "react";

const Logo = ({ size = 14 }) => {
  return (
    <div className={``}>
      <img className={`h-${size}`} src="src/assets/logo.png" />
    </div>
  );
};

export default Logo;
