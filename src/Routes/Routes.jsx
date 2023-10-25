import {
      createBrowserRouter,
     
    } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Shop from "../Components/Shop/Shop";
import Orders from "../Components/Order/Order";




    const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                  path:"/",
                  element:<Home></Home>
            },
            {
              path:"/shop",
              element: <Shop></Shop>
            },
            {
              path:"/order",
              element:<Orders></Orders>
            },
            {

              path:"/login",
              element: <Login></Login>
            },
            {

              path:"/register",
              element: <Register></Register>
            }
        ]
      },
    ]);

    export default router ;


