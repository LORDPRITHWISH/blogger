import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Authenticator from "./components/Authenticator.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Post from "./pages/Post.jsx";
import EditPosts from "./pages/EditPost.jsx";
import Logout from "./pages/Logout.jsx";
import AddPost from "./pages/AddPost.jsx";
import Profile from "./pages/Profile.jsx";
import AllPost from "./pages/AllPost.jsx";
import EditPost from "./pages/EditPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Authenticator authentication={false}>
            <Login />
          </Authenticator>
        ),
      },
      {
        path: "/signup",
        element: (
          <Authenticator authentication={false}>
            <Signup />
          </Authenticator>
        ),
      },
      {
        path: "/posts",
        element: (
          <Authenticator authentication={true}>
            <AllPost />
          </Authenticator>
        ),
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/edit_po/:slug",
        element: (
          <Authenticator authentication={true}>
            <EditPosts />
          </Authenticator>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <Authenticator authentication={true}>
            <Post />
          </Authenticator>
        ),
      },
      {
        path: "/post",
        element: (
          <Authenticator authentication={true}>
            <AllPost />
          </Authenticator>
        ),
      },
      {
        path: "/create-post",
        element: (
          <Authenticator authentication={true}>
            <AddPost />
          </Authenticator>
        ),
      },
      {
        path: "profile",
        element: (
          <Authenticator authentication={true}>
            <Profile />
          </Authenticator>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
