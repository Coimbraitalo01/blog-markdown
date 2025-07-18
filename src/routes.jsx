import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/post/:slug", element: <Post /> }
]);
