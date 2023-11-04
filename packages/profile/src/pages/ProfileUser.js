import { Link } from 'react-router-dom';

const ProfileUser = () => {
    return (
        <div style={{ background: 'orange' }}>
            <h1> Profile User Page</h1>
            <Link to="/home">Go to Home</Link>
            <Link to="/profile">Go to Profile</Link>
        </div>
    );
};

export default ProfileUser;