import React from "react";
import { useParams } from "react-router-dom";

const ProfileUser = () => {
    let { id } = useParams();

    return (
        <div>
            id: {id}
        </div>
    )
}

export default ProfileUser;