import React, { Suspense } from "react";
import { useFederatedComponent } from "./hooks/useFederatedComponent";

// const HomeRemote = React.lazy(() => import("home/App"));

const homeFederated = {
    url: `${process.env.NODE_ENV === 'development' ? 'http://localhost:3002' : `${window.location.origin}/home`}/remoteEntry.js`,
    scope: 'home',
    module: './App'
}

const App = () => {
    const { url, scope, module } = homeFederated
    const { Component: FederatedComponent, errorLoading } = useFederatedComponent(url, scope, module);

    console.log(FederatedComponent)


    return (
        <div style={{
            margin: "10px",
            padding:"10px",
            textAlign:"center",
            backgroundColor:"red"
        }}>
            <h1>App</h1>

            <Suspense fallback={"loading..."}>
                {errorLoading
                    ? `Error loading module "${module}"`
                    : FederatedComponent && <FederatedComponent />}
            </Suspense>
        </div>
    )
}

export default App;

