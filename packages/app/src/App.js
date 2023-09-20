import React, { Suspense } from "react";
import { Routes } from './Routes';

const App = () => {

    return (
        <div style={{
            margin: "10px",
            padding:"10px",
            textAlign:"center",
            backgroundColor:"red"
        }}>
            <h1>App</h1>
            <Routes />
        </div>
    )
}

export default App;

