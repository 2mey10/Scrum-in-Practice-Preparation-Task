import {Outlet, Link, Routes} from "react-router-dom";
import Navbar from "../components/navbar";
import React from "react";
import Typography from "@mui/material/Typography";
import "../index.css";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {PrivateRoute,PrivateOutlet} from "../utils/PrivateRoute";
import { AuthProvider } from "../context/AuthContext";
import Home from "../views/HomePage";
import Login from "../views/LoginPage";
import Register from "../views/RegisterPage";
import ProtectedPage from "../views/ProtectedPage";
import Aufgabenstellung from "./aufgabenstellung";
import AuthContextProvider from '../context/AuthContext';
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
                    <Route exact path='/' element={<PrivateOutlet/>}>
                        <Route exact path="/protected" element={<ProtectedPage/>}/>
                    </Route>
                    {/*<PrivateRoute component={ProtectedPage} path="/protected" exact />*/}
                </Routes>
                </AuthProvider>
            </div>
        </>
    );
}