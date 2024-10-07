import React, { useState, useEffect } from 'react'
import { CButton, CCard, CCardBody, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CImage, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import { useNavigate } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilUser } from '@coreui/icons';
import user from 'src/assets/images/icons8-user-96.png'

function UserList() {

  const [appNetUser, setAppNetUser ] = useState();
  const navigate = useNavigate();


  useEffect(()=>{
    try {
   
      fetch("http://localhost:8080/get_User")
        .then((datas)=>{
          return datas.json();
        }).then((data)=>{
            console.log(data);
            setAppNetUser(data)
        })
        .catch((err)=>{
          console.log(err)
        })

      
      //setSuccess(true)
      
  // setShowdashboard(true)

  }catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  }
  },[])


    


  

  return (
    <>
         <CCard style={{ boxShadow: "0px 15px 34px 0px rgba(0,0,0,0.2)", marginBottom:'30px', backgroundColor:"rgba(255,255,255,0.7)"}}>
            <CCardBody>
                <CCardTitle style={{padding:"15px", fontSize:"2em" , display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <CImage src={user} height={32} style={{marginRight:"5px"}}/>
                    <div>Users</div>
                  </div>
                  <CButton color="primary" onClick={()=>navigate('/user-registration')} >
                    <CIcon icon={cilPlus} style={{marginRight:"5px"}}/>
                    Register New User
                  </CButton> 
                </CCardTitle>
                  

                  <CTable responsive small stripedColumns bordered>
                    <CTableHead>
                      <CTableRow color='dark' style={{textAlign:'center'}}>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                        <CTableHeaderCell scope="col">organisation</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                        <CTableHeaderCell scope="col">groupID</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    {appNetUser && 
                      appNetUser.map((data, idx)=>(
                          <CTableBody>
                          <CTableRow>
                            <CTableHeaderCell scope="row">{idx+1}</CTableHeaderCell>
                            <CTableDataCell>{data.names}</CTableDataCell>
                            <CTableDataCell>{data.email}</CTableDataCell>
                            <CTableDataCell>{data.organisation}</CTableDataCell>
                            <CTableDataCell>{data.userName}</CTableDataCell>
                            <CTableDataCell>{data.role}</CTableDataCell>
                            <CTableDataCell>{data.groupID}</CTableDataCell>
                            
                          </CTableRow>    
                        </CTableBody>
                      )) 
                    } 
                  </CTable>
                  
            </CCardBody>
        </CCard>
    </>
  )
}

export default UserList
