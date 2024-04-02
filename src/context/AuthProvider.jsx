import { PropTypes } from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "./../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();

  // signUp
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut
  const logOut = (email, password) => {
    setLoading(true);
    return signOut(auth, email, password);
  };

  // signInWithGoogle
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // update userProfile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currrentUser) => {
      setUser(currrentUser);

      if (currrentUser) {
        // get token & store in client
        const user = { email: currrentUser?.email };
        axiosPublic.post("/jwt", user).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        // remove token(if token stored in client side : local storage, caching memory)
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });

    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    signUp,
    login,
    logOut,
    signInWithGoogle,
    user,
    loading,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
