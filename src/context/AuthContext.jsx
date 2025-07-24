import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { MainApi } from "../Api/Api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const AuthContext = createContext({
    token:null,
    isAuth:false,
    login: () => {},
    logout: () => {},
    registration :() => {},
});


export const AuthProvider = ({children}) => {
    const initToken = Cookies.get("token");
    const [token , setToken]= useState(initToken);
    const navigate =useNavigate();
    useEffect(() => {
   token &&  validateToken();
    },[]);
    const validateToken = () => {
     MainApi.get("/auth/me",{
        headers:{
            Authorization:`Bearer ${token}`
        },
     }).then(({data}) => {console.log(data);
     }).catch((error) => {
       console.log(error);
       logout();
       
     })
    };
    const login = (userData) =>{
        
     console.log('user data' , userData),
     MainApi.post("/auth/login",{
        ...userData,  
      }).then(({data}) => {
        setToken(data.accessToken);
        Cookies.set('name', data.accessToken, { expires: 14 });
         navigate('/', {replace:true});
        console.log(data.accessToken);
        
          
      }).catch((error) => {
          console.log(error);
          
      });
    } ;
    const registration = (userData) => {
       MainApi.post("/users/add" , userData)
       .then((res) => {
        console.log(res);
       }).catch(error => console.log(error)
       )
       };
    const logout = () =>{
        Cookies.remove("token");
        setToken(null);
        navigate("/login",{replace:true});
       
       } ;
   
    return  <AuthContext.Provider value={{
        login,
        logout,
     registration,
        token,
        isAuth: !!token,
        
        }}>
            {children}
        </AuthContext.Provider>;
    
};

 export const useAuthContext = () => useContext(AuthContext);
