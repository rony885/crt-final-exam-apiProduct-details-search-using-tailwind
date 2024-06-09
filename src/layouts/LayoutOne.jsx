// import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutOne = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LayoutOne;