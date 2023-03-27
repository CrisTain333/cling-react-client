import UserModal from "../components/Navbar/addUsermodal/AddUserModal";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import User from "../pages/User";

const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../Layout/Layout");
const { default: Home } = require("../pages/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/User-modal",
    element: <UserModal />,
  },

]);
