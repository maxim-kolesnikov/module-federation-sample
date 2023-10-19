import React from "react";
import { ErrorBoundary } from "react-error-boundary";
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
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <RouterProvider router={createBrowserRouter(routes)} />
            </ErrorBoundary>
        </div>
    )
}

export default App;

