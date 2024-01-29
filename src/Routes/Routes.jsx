import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import Blogs from "../Pages/Blogs/Blogs";
import Favorites from "../Pages/Favorites/Favorites";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import AddBlog from "../Pages/Blogs/AddBlog";
import UpdateBlog from "../Pages/Blogs/UpdateBlog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/blogs",
            element: <Blogs />
        },
        {
            path: "/blogs/blog-details/:blogId",
            element: <BlogDetails />
        },
        {
            path: "/add-blog",
            element: <AddBlog />
        },
        {
            path: "/blogs/update-blog/:blogId",
            element: <UpdateBlog />
        },
        {
            path: "/favorites",
            element: <Favorites />
        },
      ]
    },
    {
        path: "*",
        element: <Error />
    }
  ]);

export default router;