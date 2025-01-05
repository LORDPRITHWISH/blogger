import React from "react";
import PropTypes from "prop-types";

const Logo = ({ className, padd = 'p-1' }) => {
  return (
    <div className={`${padd} bg-zinc-100`}>
      <img className={className} src="src/assets/logo.png" />
    </div>
  );
};
Logo.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Logo;

// w-${size}
