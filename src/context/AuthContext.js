import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const logout = () => {
    return signOut(auth);
  };

  const signup = (email, password) => {
    // register
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  useEffect(() => {
    // accepts auth and user fallback function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
