import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/config";

const useLogout = () => {
    const {dispatch} = useContext(AuthContext);
    const logout = async () => {
        try {
            await signOut(auth);
            dispatch({type:'LOGOUT',payload:null});
            console.log('usr logged out');
            
        } catch (error:any) {
            console.log(error.message);
            
        }
    };

    return {logout};
}

export default useLogout
