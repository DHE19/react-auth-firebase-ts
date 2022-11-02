import {GithubAuthProvider, signInWithPopup} from 'firebase/auth'
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import{auth} from '../firebase/config'
import { createUserDocument } from '../firebase/createUserDocument';


export const useLogin = () => {
    // save the errros
    const [error, setError] = useState<string | null>('');
    // define the state of the request
    const [isPending, setIsPending] = useState(false);
    //provide all about Github Auth Provider
    const provider = new GithubAuthProvider();
    const {dispatch} = useContext(AuthContext);
    // make a login
    const login =  async () =>{
        //define as null error
        setError(null);
        // and pendig as true
        setIsPending(true);

        try {

            const res = await signInWithPopup(auth, provider);
            if(!res) throw new Error('No se pudo compoletar el loggeo');
            //we get the user form response
            const user = res.user;
            await createUserDocument(user);
            dispatch({type:'LOGIN',payload:user})
            setIsPending(false);

        } catch (error:any) {
            console.log(error);
            setError(error.message);
            setIsPending(false);
        }
    }
    return {login, error, isPending}
}


