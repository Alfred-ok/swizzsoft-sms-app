import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CRow, CFormSelect, CImage } from '@coreui/react'
import userRegistration from 'src/assets/images/icons8-registration-96.png'

function RegisterUser() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [organisation, setOrganisation] = useState();
    const [userName, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [roles, setRoles] = useState();

    const navigate = useNavigate();

    const[successUpdate,setSuccessUpdate] = useState(false)

    const handleSubmit = async(e)=>{
        e.preventDefault()

        setSuccessUpdate(true)
    
        try {
       
            const response = await fetch("http://localhost:8080/auth/register", {
                method: 'POST', // Specify the request method as POST
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                    // Add other headers as necessary
                },
                body: JSON.stringify(
                    {
                        names: name,
                        email: email,
                        organisation: organisation,
                        userName: userName,
                        password: password,
                        role: roles
                    }
                ) // Convert the data to a JSON string for the body
            });
           
            // Check if the response is okay (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
             
            const data = response.json().
            console.log(data);
            
            //setSuccess(true)
            
        // setShowdashboard(true)
    
        }catch (error) {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        }
    
        setSuccessUpdate(false)
        //navigate('/user');
      }

  return (
    <>
        <CRow>
            <CCol xs={10} style={{margin:"0 auto"}}>
                <CCard className="mb-4" style={{ boxShadow: "0px 15px 34px 0px rgba(0,0,0,0.2)" }}>
                
                <CCardBody style={{padding:"35px"}}>
                    <CCardTitle>
                        <span style={{fontSize:"30px", display:"block", padding:"20px 20px", display:"flex", alignItems:"center"}}>
                            <CImage src={userRegistration} height={32} style={{marginRight:"7px"}}/> User Registration
                        </span>
                    </CCardTitle>
                    <CForm onSubmit={handleSubmit} style={{backgroundColor:"rgba(0,0,0,0.1)", padding:"25px", borderRadius:"5px"}}>
                        <CRow>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput1">User name</CFormLabel>
                                    <CFormInput
                                        type="text"
                                        id="exampleFormControlInput1"
                                        placeholder="User name"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                            </CCol>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput2">E-Mail Address</CFormLabel>
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput2"
                                        placeholder="E-Mail Address"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </CCol>
                            
                        </CRow>
                        <CRow>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput3">Names</CFormLabel>
                                    <CFormInput
                                        type="text"
                                        id="exampleFormControlInput3"
                                        placeholder="Names"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </CCol>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput4">Password</CFormLabel>
                                    <CFormInput
                                        type="password"
                                        id="exampleFormControlInput4"
                                        placeholder="Password"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput5">Confirm password</CFormLabel>
                                    <CFormInput
                                        type="password"
                                        id="exampleFormControlInput5"
                                        placeholder="Confirm password"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </CCol>
                            <CCol>

                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput6">Roles</CFormLabel>
                                    <CFormSelect 
                                        id="exampleFormControlInput6"
                                        aria-label="Default select example"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        value={roles} onChange={(e)=>setRoles(e.target.value)} 
                                        required
                                        options={[
                                            'Select Role',
                                            { label: 'Admin', value: 'Admin' },
                                            { label: 'User', value: 'User' },
                                        ]}/>
                                        
                                </div>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput7">Organisation</CFormLabel>
                                <CFormInput
                                        type="number"
                                        id="exampleFormControlInput7"
                                        placeholder="Organisation"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setOrganisation(e.target.value)}
                                        required
                                    />
                            </div>
                            </CCol>
                            <CCol>
                                
                            </CCol>
                        </CRow>


                        <div className="col-auto" style={{width:"60%", paddingTop:"20px", margin:"0px auto"}}>

                           
                            { 
                            successUpdate  ?  
                                
                                <CButton color="primary" type="submit" className="mb-3" disabled style={{width:"100%", margin:"0 auto"}}>
                                    <CSpinner as="span" size="sm"/> Uploading Data ...
                                </CButton>
                                :
                                <CButton color="primary" type="submit" className="mb-3"  style={{width:"100%", margin:"0 auto"}}>
                                    REGISTER
                                </CButton>
                            }
                        </div>
                    </CForm>
                </CCardBody>
                </CCard>
            </CCol>

        </CRow>
    </>
  )
}

export default RegisterUser