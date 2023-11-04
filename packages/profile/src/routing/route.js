import React, { Suspense } from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import Profile from '../pages/Profile';
import ProfileUser from '../pages/ProfileUser';


const routes = [
    {
        path: '/profile',
        element: <Profile />,
        children: [
            {
                index: true,
                element: <Navigate to="/profile" />,
            },
            {
                path: '/profile/:id',
                element: <Suspense fallback="Loading Profileuser..."><ProfileUser /></Suspense>,
            },
        ]
    },
];

export default routes;