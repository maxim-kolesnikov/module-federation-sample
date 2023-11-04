import React from 'react';
import { ErrorBoundary } from 'react-error-boundary'     ;
import { RouterProvider, createHashRouter, createBrowserRouter } from 'react-router-dom';

import { routes } from "./routing/route";

const App = () => {
    const createRouter = process.env.HASH_ROUTER ? createHashRouter : createBrowserRouter;
    const router = createRouter(routes);

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

