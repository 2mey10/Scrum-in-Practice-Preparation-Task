import {Outlet, Link} from "react-router-dom";
import Navbar from "../components/navbar";
import React from "react";
import Typography from "@mui/material/Typography";

export default function Root() {
    return (
        <>
            <div>
                <Navbar/>
            <div id="detail">
                <Outlet/>
            </div>
            </div>
        </>
    );
}