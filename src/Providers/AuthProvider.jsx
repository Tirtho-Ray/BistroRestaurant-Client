import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,FacebookAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]= useState(true);
    const google =  new GoogleAuthProvider();
    const facebook = new FacebookAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google sign in

    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth,google)
    }
    // facebook sign in
    const facebookSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, facebook);
      };

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    // const updateUserprofile =(name)=>{
    //    return updateProfile(auth.currentUser,{
    //         displayName:name,

    //     })
    // }
    
    const updateUserprofile = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setLoading(false);
            console.log("Profile updated successfully.");
          })
          .catch((error) => {
            setLoading(false);
            console.error("Error updating profile:", error);
            throw error; // Rethrow the error to handle it in the calling function if necessary
          });
      };
    
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log('current user',currentUser);
            if(currentUser){
                const userInfo = {email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then((res)=>{
                    if(res.data.token){
                        localStorage.setItem('access_token',res.data.token);
                        setLoading(false);
                    }
                })
            }else{
                localStorage.removeItem('access_token');
                setLoading(false);
            }
            
        });
        return ()=>{
            unsubscribe();
        }
    },[axiosPublic])


    const authInfo ={
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUserprofile,
        googleSignIn,
        facebookSignUp
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;