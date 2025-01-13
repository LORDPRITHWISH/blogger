import React from "react";

const Logo = ({ size = 14, className, padd = "p-1" }) => {
  let imsiz = `h-14`;
  // if (size) imsiz = `h-${size}`;

  return (
    <div className={`${padd} ${className} bg-zinc-900`}>
      <img className={` ${imsiz} ${className}`} src="/src/assets/logo.png" />
    </div>
  );
};

export default Logo;

// w-${size}
