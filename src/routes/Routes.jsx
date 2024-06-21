import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import House from "../pages/Home/House";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Update from "../Update/Update";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/house.json')
            },
            {
                path: '/house/:id',
                element: <PrivateRoute><House></House></PrivateRoute>,
                loader: () => fetch('/house.json')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/update',
                element: <Update></Update>,
            },
        ]
},
]);

export default Routes;