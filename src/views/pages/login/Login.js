import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import AuthContext from '../../../Context/AuthProvider'
import axios from 'axios'
import Cookies from 'js-cookie'

const Login = () => {

  const [loginusername, setLoginUsername] = useState('');
  const [password, setPassword] = useState('');
  



  const navigate = useNavigate();
  const { setRole, setUsername,setAuthToken} = useContext(AuthContext);

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try {
   
        const response = await fetch("http://localhost:8080/auth/authenticate", {
            method: 'POST', // Specify the request method as POST
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
                // Add other headers as necessary
            },
            body: JSON.stringify({ username: loginusername, password: password}) // Convert the data to a JSON string for the body
        });
       
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
     
        // Parse the JSON response
        const responseData = await response.json();
        //return responseData; // Return the parsed JSON
        console.log(responseData)

        setRole(responseData.role)
        setUsername(responseData.user)
        
        

        setAuthToken({
          accessToken: responseData.accessToken,
          refreshToken: responseData.refreshToken
        })

        Cookies.set('username', responseData.user, {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
          path: '/',
        });
        Cookies.set('role', responseData.role, {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
          path: '/',
        });
        Cookies.set('refreshToken', responseData.accessToken, {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
          path: '/',
        });
       

        
        //setSuccess(true)
        
    // setShowdashboard(true)

    }catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('There was a problem with the fetch operation:', error);
    }

   
    navigate('/dashboard');
  }


  return (
    <div className="min-vh-100 d-flex flex-row align-items-center"
      style={{
          backgroundImage: "url('src/assets/images/login-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundColor:"rgba(0,0,0,0.5)",
          backgroundSize: "cover",
          backgroundBlendMode:"multiply",
          overflow:"hidden",
        }}
      >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
              <h3 style={{textAlign:"center", color:"#fff", padding:"20px"}}>WAZI MOBILE</h3>
            <CCardGroup>
              <CCard className="p-4"  style={{ boxShadow: "0px 15px 34px 0px rgba(0,0,0,0.2)" }}>
                <CCardBody>

                  <CForm onSubmit={handleSubmit} style={{ textAlign: "center" }} >
                    <h1 style={{ marginTop: "10px" }}>Login</h1>
                    <p className="text-body-secondary" style={{ marginTop: "10px" }}>Sign In to your account</p>
                    <CInputGroup className="mb-3" style={{ marginTop: "20px" }}>
                      <CInputGroupText
                        style={{
                        borderColor: "rgb(71, 71, 212)",
                        backgroundColor: "rgb(71, 71, 212)",
                        color: "#fff",
                      }}
                      >
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="Username" 
                        autoComplete="username" 
                        value={loginusername} 
                        onChange={(e)=>setLoginUsername(e.target.value)}
                        style={{ borderColor: "rgb(71, 71, 212)" }} 
                        required/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText
                        style={{
                        borderColor: "rgb(71, 71, 212)",
                        backgroundColor: "rgb(71, 71, 212)",
                        color: "#fff",
                      }}
                      >
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        style={{ borderColor: "rgb(71, 71, 212)" }}
                      />
                    </CInputGroup>


                    <CRow>
                      <CCol xs={12} style={{ marginTop: "15px" }}>
                        <CButton color="primary" className="px-4" type="submit"  style={{ width: "100%" }}>
                          Login
                        </CButton>
                      </CCol>

                      <CCol xs={12} className="text-right" style={{ marginTop: "15px" }}>
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>

                  </CForm>

                </CCardBody>
              </CCard>



             
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
