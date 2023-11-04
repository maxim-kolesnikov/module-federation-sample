import React, { Suspense } from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';

const HomeRemote = React.lazy(() => import('home/App'));
const ProfileRemote = React.lazy(() => import('profile/App'));

export const RootLayout = () => {
    return (
        <div>
            <Link to={{ pathname: '/' }} style={{ marginRight: "1rem" }}>App</Link>
            <Link to={{ pathname: '/home' }} style={{ marginRight: "1rem" }}>Home</Link>
            <Link to={{ pathname: '/profile' }} style={{ marginRight: "1rem" }}>Profile</Link>
            <Outlet />
        </div>
    );
}

export const routes = [
    {
        // basename: '/#',
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/" />,
            },
            {
                path: `/home`,
                element: <Suspense fallback="Loading Home..."><HomeRemote /></Suspense>,
            },
            {
                path: `/profile/*`,
                element: <Suspense fallback="Loading Profile..."><ProfileRemote /></Suspense>,
            },
        ],
    },
];