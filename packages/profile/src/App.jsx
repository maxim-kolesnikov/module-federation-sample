import React, { Suspense } from "react";
import { Link, Routes, Route, useParams } from 'react-router-dom';

const ProfileUser = React.lazy(() => import ('./ProfileUser'));

const ProfileList = () => {
    return (
        <div>
            <Link to="/profile/1">Maxim</Link>
            <br />
            <Link to="/profile/2">Ivan</Link>
            <br />
            <Link to="/profile/3">Andrey</Link>
            <br />
            <Link to="/profile/4">Kirill</Link>
        </div>
    )
}


const App = () => {
    return (
        <div style={{
            margin: "10px",
            padding:"10px",
            textAlign:"center",
            backgroundColor:"green"
        }}>
            <Routes>
                <Route path="/" element={<ProfileList />} />
                <Route path="/:id" element={<Suspense fallback="loading.."><ProfileUser /></Suspense>} />
            </Routes>
        </div>
    )
}

export default App;

