import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import parse from "html-react-parser";
import service from "../appwrite/config";
import Container from "../components/container/Container";

const Post = () => {
  const [post, setPost] = React.useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userdata = useSelector((state) => state.auth.userData);
  // console.log('data=> ',userdata.$id);
  const isAuther = React.useRef(post?.UserId === userdata?.$id);
  // const isAuther = false;

  const deleatePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  React.useEffect(() => {
    isAuther.current = post?.UserId === userdata.$id;
    // console.log(isAuther);
    // console.log(`${isAuther},${post?.UserId}, ${userdata?.$id}`);
  }, [post, userdata]);

  React.useEffect(() => {
    service.getPost(slug).then((gotpost) => {
      if (gotpost) {
        setPost(gotpost);
      } else {
        navigate("/");
        
      }
    });
  }, [slug, navigate]);

  return post ? (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <img src={service.getPreview(post.logo)} alt={post.title} className="w-1/2 rounded-xl" />
          {isAuther.current && (
            <div>
              <button onClick={deleatePost} className="bg-red-500 text-white px-3 py-1 rounded-md">
                Delete
              </button>
              <button onClick={() => navigate(`/edit_po/${post.$id}`)} className="bg-blue-500 text-white px-3 py-1 rounded-md">
                Edit
              </button>
            </div>
          )}
        </div>
        <div className="w-full mb-2">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <div className="brouwer-css">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : null;
};

export default Post;
