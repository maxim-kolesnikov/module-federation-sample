import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1> Profile Page</h1>
            <Link to="/home">Go to Home</Link>
            <Link to="/profile/1">Go to Profile user id1</Link>
            <Link to="/profile/2">Go to Profile user id2</Link>
            <Link to="/profile/3">Go to Profile user id3</Link>
        </div>
    );
};

export default Profile;
