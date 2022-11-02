import useLogout from "../hooks/useLogout";

import { User } from "firebase/auth";

interface Props {
    user: User
}

const ProfileCard:React.FC<Props> = ({user}) => {
    const {logout}  = useLogout();


    return (
        <>
            <div className="profile-card">
                <img src={`${user.photoURL}`} className='profile-img' alt="profile"/>
                <p>Name: <span>{user.displayName}</span></p>
                <p>
                    Email: <span>{user.email}</span>
                </p>
                <p>
                    User ID: <span>{user.uid}</span>
                </p>
            </div>
            <button className="btn" onClick={logout}>
                Log out
            </button>
        </>
    )
}

export default ProfileCard
