import React from "react";
import { Link } from "react-router";
import service from "../appwrite/config";

const Postcard = ({ $id, title, imageurl }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Link to={`/post/${$id}`}>
          <img className="w-full" src={service.getPreview(imageurl)} alt="the sight to see" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Postcard;
