import React, { createContext } from "react";
import { useState ,useEffect} from "react";
import { getLocalStrorage } from "../utils/localStorage";
export const authContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
      const {employees,admin} = getLocalStrorage()
      setUserData({employees,admin})
  }, [])
  return (
    <div>
      <authContext.Provider value={userData}>
        {children}
      </authContext.Provider>
    </div>
  );
};

export default AuthProvider;