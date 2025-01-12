import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Container from "../components/container/Container";
import PostForm from "../components/postForm/PostForm";
import service from "../appwrite/config";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    service.getPost(slug).then((gotpost) => {
      if (gotpost) {
        setPost({slug:slug , ...gotpost});
      } else {
        navigate("/");
      }
    });
  }, [slug, navigate]);

  if (!post) {
    return <p>Loading...</p>;
  }
  return <div>
    <Container>
      <PostForm post={post} />
    </Container>
  </div>;
};

export default EditPost;
