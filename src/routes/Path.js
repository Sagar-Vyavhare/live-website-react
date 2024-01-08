import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../basics/Main";
import FileReaderP from "../basics/file reader/FileReaderP";
import formDesign from "../basics/components/formDesign";
import ChangeBg from "../basics/change background/ChangeBg";
import Admin from "../admin_panel/Admin";
import Order from "../admin_panel/pages/orders/Order";
import Home from "../admin_panel/pages/home/Home";
import User from "../admin_panel/pages/users/User";
import Product from "../admin_panel/pages/products/Product";
export default function Path() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Admin,
      children: [
        {
          path: "/",
          Component: Home,
        },
        {
          path: "/users",
          Component: User,
        },
        {
          path: "/products",
          Component: Product,
        },
        {
          path: "/orders",
          Component: Order,
        },
      ],
    },
    {
      path: "/basics",
      Component: Main,
      children: [
        {
          path: "/basics",
          Component: FileReaderP,
        },
        {
          path: "/basics/form-design",
          Component: formDesign,
        },
        {
          path: "/basics/change-background",
          Component: ChangeBg,
        },
        {
          path: "/basics/aa2",
          element: <h2>aa2</h2>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
