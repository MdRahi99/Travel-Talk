import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import Blogs from "../Pages/Blogs/Blogs";
import Favorites from "../Pages/Favorites/Favorites";

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