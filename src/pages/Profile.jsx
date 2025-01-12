import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import service from "../appwrite/config";
import Container from "../components/container/Container";
import Postcard from "../components/Postcard";
import { Query } from "appwrite";

const Profile = () => {
  const user = useSelector((state) => state.auth.userData);
  // console.log(user);

  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log("Getting Posts");
    service
      .getPosts([Query.equal("UserId", user.$id)])
      .then((posts) => {
        // console.log(posts)
        if (posts) {
          // console.log(posts);
          setPosts(posts.documents);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <div className="bg-slate-800">
        <h1 className=" text-4xl font-extrabold">welcome {user.name}</h1>
        <h2 className=" text-lg font-light text-gray-500">email: {user.email}</h2>
      </div>
      <Container>
        <p className="text-2xl font-bold justify-center p-3"> Here are your posts</p>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {posts &&
            posts.length > 0 &&
            posts.map((post) => (
              <div key={post.$id} className="rounded-md shadow-md p-4 bg-slate-700">
                <Postcard {...post} />
              </div>
            ))}
          {posts && posts.length === 0 && <p>Make your first Post</p>}
        </div>
      </Container>
    </div>
  );
};

export default Profile;
