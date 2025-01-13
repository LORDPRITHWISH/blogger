import React from "react";
import { useParams, useSearchParams } from "react-router";

const Test = () => {
  const forr = useParams().slug;
  // console.log(Boolean(forr));
//   const [searchParams] = useSearchParams();
//   const parr = (useSearchParams().every());
//   console.log(searchParams.get("lol"));
//   console.log(searchParams);
// console.log(parr)

  return (
    <div>
      <h1>Test</h1>
      <h2>{forr}</h2>
      {/* <h3>{searchParams.get("lol")}</h3> */}
    </div>
  );
};

export default Test;
