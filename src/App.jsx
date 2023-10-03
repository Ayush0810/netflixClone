import Home from "./pages/Home/Home"
import Main from "./pages/Main/Main";
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
  {
    path: "/browse",
    "element" : <Main/>
  },
]);
export default function App() {
  return (
    <div className="flex justify-center main">
         <RouterProvider router={router} />
    </div>
  )
}