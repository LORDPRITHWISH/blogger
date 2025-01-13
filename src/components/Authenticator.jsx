import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

const Authenticator = ({ children, authentication = true }) => {
  console.log(useLocation().pathname);
  const location = useLocation().pathname;

  const logging = useSelector((state) => state.auth.loaded);
  // if (logging) {
  const logstate = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log(logging);
    if (logging) {
      if (authentication && !logstate) {
        navigate(`/login?loc=${location}`);
      } else if (!authentication && logstate) {
        navigate("/");
      }
      setLoading(false);
    }
  }, [logstate, authentication, navigate, location, logging]);

  // }

  return loading ? null : <div>{children}</div>;
  // } else {
  //   return null;
  // }
};

export default Authenticator;
