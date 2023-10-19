import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from "./routes/route";
const App = () => {

    console.log(routes)

    return (
        <div style={{
            margin: "10px",
            padding:"10px",
            textAlign:"center",
            backgroundColor:"red"
        }}>
            <h1>App</h1>
            <RouterProvider router={createBrowserRouter(routes)} />
        </div>
    )
}

export default App;

