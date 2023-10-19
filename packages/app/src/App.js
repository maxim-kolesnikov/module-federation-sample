import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider, createHashRouter } from 'react-router-dom';
import routes from "./routes/route";
const App = () => {

    const router = createHashRouter(routes);

    console.log(routes, router)

    return (
        <div style={{
            margin: "10px",
            padding:"10px",
            textAlign:"center",
            backgroundColor:"red"
        }}>
            <h1>App</h1>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <RouterProvider router={router} />
            </ErrorBoundary>
        </div>
    )
}

export default App;

