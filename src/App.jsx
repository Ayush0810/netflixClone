import Home from "./pages/Home/Home"
import Signin from "./pages/Signin/Signin"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/hello",
    element: <div>Hello world!</div>,
  },
  {
    path: "/",
    "element" : <Home/>
  },
  {
    path: "/signin",
    "element" : <Signin/>
  },
]);
export default function App() {
  return (
    <div className="flex justify-center">
         <RouterProvider router={router} />
    </div>
  )
}