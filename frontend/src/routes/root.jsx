import {Outlet, Link, Routes} from "react-router-dom";
import Navbar from "../components/navbar";
import React from "react";
import Typography from "@mui/material/Typography";
import "../index.css";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {PrivateRoute,PrivateOutlet} from "../utils/PrivateRoute";
import { AuthProvider } from "../context/AuthContext";
import Home from "./HomePage";
import Login from "./LoginPage";
import Register from "./RegisterPage";
import ProtectedPage from "./ProtectedPage";
import Aufgabenstellung from "./aufgabenstellung";
import AuthContextProvider from '../context/AuthContext';
import Images from "./Images";
export default function Root() {
    return (
        <>
            <div>
                <AuthProvider>
                <Navbar/>
                <Routes>
                    <Route element={<Aufgabenstellung/>} path="/aufgabenstellung"/>
                    <Route element={<Login/>} path="/login" />
                    <Route element={<Register/>} path="/register" />
                    <Route element={<Home/>} path="/" />
                    <Route element={<ProtectedPage/>} path="/protected"/>
                    <Route element={<Images/>} path = "/images"/>
                </Routes>
                </AuthProvider>
            </div>
        </>
    );
}