import React, {useContext} from 'react';
import {Navigate, Outlet, Route} from 'react-router-dom';
import AuthContext from "../context/AuthContext";
import * as PropTypes from "prop-types";


function PrivateRoute({ children }) {
    const auth = useContext(AuthContext);
    return auth ? children : <Navigate to="/login" />;
}
function PrivateOutlet() {
    const auth = useContext(AuthContext);
    return auth ? <Outlet /> : <Navigate to="/login" />;
}
export {PrivateOutlet, PrivateRoute}