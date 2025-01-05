import { useEffect, useState } from "react";
import service from "../appwrite/config";
import Container from "../components/container/Container";
import Postcard from "../components/Postcard";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    service
      .getPosts()
      .then((posts) => {
        if (posts) {
          console.log(posts);
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
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts &&
            posts.length > 0 &&
            posts.map((post) => (
              <div key={post.$id} className="bg-white rounded-md shadow-md p-4">
                <Postcard {...post} />
              </div>
            ))}
          {posts && posts.length === 0 && <p>Be the first to Post</p>}
        </div>
      </Container>
    </div>
  );
};

export default Home;
