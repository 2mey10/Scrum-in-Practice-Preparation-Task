import React from 'react';
import ReactDOM from 'react-dom/client';
import {Outlet, Route, Routes} from "react-router-dom";
import ErrorPage from "./error-page";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Contact from "./routes/contact";
import Root from "./routes/root";
import Aufgabenstellung from "./routes/aufgabenstellung";
import Login from "./views/LoginPage";
import Register from "./views/RegisterPage";
import Home from "./views/HomePage";
import {PrivateRoute} from "./utils/PrivateRoute";

const router = createBrowserRouter([
    {

        path: "*",
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "contacts/:contactId",
                element: <Contact />
            },
            // {
            //     path:"aufgabenstellung/",
            //     element: <Aufgabenstellung/>
            // },
            // {
            //     path:"login/",
            //     element: <Login/>
            // },
            // {
            //     path:"register/",
            //     element: <Register/>
            // },
            // {
            //     path:"protected/",
            //     element: <PrivateRoute/>
            // }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);