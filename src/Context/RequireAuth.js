import React, { useEffect } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import AuthContext from './AuthProvider'
import { useContext } from 'react'
import Cookies from 'js-cookie';

function RequireAuth() {
    const{username, setAuthToken, authToken} = useContext(AuthContext);
    const location = useLocation();

    const url = "http://localhost:8080/auth/refresh-token";

    const refreshTokenInCookie = Cookies.get('refreshToken');

    useEffect(()=>{

      const token = async () =>{
        try {
          const response = await fetch(url, {
                method: 'POST', // Specify the request method as POST
                headers: {
                    'Content-Type': 'application/json',  // Set the content type to JSON
                    'Authorization': `Bearer ${refreshTokenInCookie}`
                }
            });
  
            const responseData = await response.json();
            setAuthToken(responseData)

            console.log(responseData);
    
    
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }

      if(!refreshTokenInCookie){
        token()
      }
    },[]);


   

  return (
    refreshTokenInCookie && refreshTokenInCookie
                  ? <Outlet/> 
                  : <Navigate to= "/login" state={{from: location}} replace/>
  )
}

export default RequireAuth