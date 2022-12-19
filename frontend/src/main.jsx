import React from 'react';
import ReactDOM from 'react-dom/client';
import {Outlet, Route, Routes} from "react-router-dom";
import ErrorPage from "./error-page";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Aufgabenstellung from "./routes/aufgabenstellung";
import Login from "./routes/LoginPage";
import Register from "./routes/RegisterPage";
import Home from "./routes/HomePage";
import {PrivateRoute} from "./utils/PrivateRoute";

const router = createBrowserRouter([
    {

        path: "*",
        element: <Root />,
        errorElement: <ErrorPage />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);