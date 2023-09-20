import React, { Suspense } from "react";

const HomeRemote = React.lazy(() => import("home/App"));
export const Routes = () => {
    // const { url, scope, module } = homeFederated
    // const { Component: FederatedComponent, errorLoading } = useFederatedComponent(url, scope, module);

    return (
        <div>

            <Suspense fallback={"loading..."}>
                <HomeRemote />
            </Suspense>

            {/*<Suspense fallback={"loading..."}>*/}
            {/*    {errorLoading*/}
            {/*        ? `Error loading module "${module}"`*/}
            {/*        : FederatedComponent && <FederatedComponent />}*/}
            {/*</Suspense>*/}
        </div>
    )
}

