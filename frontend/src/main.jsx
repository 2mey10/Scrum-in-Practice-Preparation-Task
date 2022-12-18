import React from 'react';
import ReactDOM from 'react-dom/client';
import {Outlet} from "react-router-dom";
import ErrorPage from "./error-page";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Contact from "./routes/contact";
import Root from "./routes/root";
import Navbar from "./components/navbar";
import Aufgabenstellung from "./routes/aufgabenstellung";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "contacts/:contactId",
                element: <Contact />
            },
            {
                path:"aufgabenstellung/",
                element: <Aufgabenstellung/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <RouterProvider router={router} />
    </React.StrictMode>
);