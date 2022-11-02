import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, FC, useEffect, useReducer } from "react";
import { auth } from "../firebase/config";
import { authReducer } from "../reducers/authReducer";


interface Props {
    children: React.ReactNode;
}

export interface IUserInfo{
    user:User | null;
    authIsReady:boolean;
}

export interface IAction{
    type: 'LOGIN' | 'LOGOUT' | 'AUTH_IS_READY';
    payload:User| null;
}

export interface IProvider{
    state: IUserInfo;
    dispatch:React.Dispatch<IAction>;
}

const initialState:IUserInfo ={
    user:null,
    authIsReady:false,
}


export const AuthContext = createContext({} as IProvider);


export const AuthContextProvider:FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    console.log(state);

    useEffect(() => {
        //gets invoked immediately after registering the onAuthStateChanged
        const unsubscribe = onAuthStateChanged(auth,(user:any) => {
            dispatch({type:'AUTH_IS_READY',payload:user})
        })
        return unsubscribe;
    }, []);
    return (
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

