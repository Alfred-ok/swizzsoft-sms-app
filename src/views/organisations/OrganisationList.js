import React, { useEffect, useState } from 'react'
import { CButton, CCard, CCardBody, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CImage, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CSpinner, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import { Button, Modal } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom';
import CIcon from '@coreui/icons-react'
import { cilPlus, cilSync } from '@coreui/icons';
import organisationIcon from 'src/assets/images/icons8-organization-96.png'

function OrganisationList() {

    const [org_data, setOrg_Data] = useState();
    const [visible, setVisible] = useState(false);
    const [dataId, setDataId] = useState();
    const[successUpdate,setSuccessUpdate] = useState(false)

    const [orgdatamodal, setOrgdataModal] = useState(
      {
        id:"",
        orgName:"",
        smsCost:"",
        //accessKey: "",
        //apiKey: "",
        groupID: "",
      }
    )

    const navigate = useNavigate();

      useEffect(()=>{
        try {
       
          fetch("http://localhost:8080/get_organisation")
            .then((datas)=>{
              return datas.json();
            }).then((data)=>{
                console.log(data);
                setOrg_Data(data)
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


     // const randomNumber = () => Math.floor(100 + Math.random() * 900);
      

      const handleUpdate = async(e)=>{
        e.preventDefault();

        const dataid  = orgdatamodal.id;
        console.log(dataId);

        //loader
        setSuccessUpdate(true)
    
        try {
            
            const response = await fetch(`http://localhost:8080/update-organisation/${dataid}`, {
                method: 'PUT', // Specify the request method as POST
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                    // Add other headers as necessary
                },
                body: JSON.stringify({ 
                  org_Name: orgdatamodal.orgName, 
                  smsCost: orgdatamodal.smsCost,
                 // accessKey: orgdatamodal.accessKey,
                 // apiKey: orgdatamodal.apiKey,
                  groupID: orgdatamodal.groupID,
                 // mbcode:56,
                 // token: "6778",
                 /// url: "TARAKA" don't update
                }) // Convert the data to a JSON string for the body 
            });
           
            // Check if the response is okay (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }   
            
            
            
        // setShowdashboard(true)
    
        }catch (error) {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        }
    
        setSuccessUpdate(false)
        navigate(0);
        setVisible(!visible)
      }


      useEffect(()=>{
        handleUpdate();
      },[])








        const getModalDataId = async(dataid)=>{
  
          console.log(dataid);
      
          try {
              
              

              fetch(`http://localhost:8080/get_organisation/${dataid}`)
                .then((datas)=>{
                  return datas.json();
                }).then((data)=>{
                    console.log(data);
                    //setModalOrgName(data.org_Name)
                    //setModalSmsCost(data.smsCost)
                    //console.log(modalSmsCost)
                    //console.log(modalorgName)

                    setOrgdataModal(
                      {
                        ...orgdatamodal,
                        id: data.id,
                        orgName: data.org_Name,
                        smsCost: data.smsCost,
                       // accessKey: data.accessKey,
                       // apiKey: data.apiKey,
                        groupID: data.groupID,
                      }
                    )
                    
                })
                .catch((err)=>{
                  console.log(err)
                })
              
              //setSuccessUpdate(true)
              
          // setShowdashboard(true)
      
          }catch (error) {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
          }
        
        } 
 


  return (
    <>
         <CCard style={{ boxShadow: "0px 15px 34px 0px rgba(0,0,0,0.2)",marginBottom:'30px', backgroundColor:"rgba(255,255,255,0.7)" }} >
            <CCardBody>
                <CCardTitle style={{padding:"15px", fontSize:"2em" , display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div>
                    <CImage src={organisationIcon} height={48} style={{marginRight:"8px"}}/>
                      Organisations
                    </div>
                    <CButton color="primary" onClick={()=>navigate('/organistion-registeration')} >
                      <CIcon icon={cilPlus} style={{marginRight:"5px"}}/>
                      Register New Organisation
                    </CButton>       
                </CCardTitle>
                  

                  <CTable responsive small stripedColumns bordered >
                    <CTableHead>
                      <CTableRow color='dark' style={{textAlign:'center'}}>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Organisation Code</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Organisation Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Sender Id</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Sms Cost</CTableHeaderCell>
                       {/*<CTableHeaderCell scope="col" >Access Key</CTableHeaderCell>*/} 
                        {/*<CTableHeaderCell scope="col">Api Key</CTableHeaderCell>*/} 
                        <CTableHeaderCell scope="col">Group Id</CTableHeaderCell>
                        <CTableHeaderCell scope="col"></CTableHeaderCell>

                      </CTableRow>
                    </CTableHead>
                    {org_data && 
                      org_data.map((data, idx)=>(
                          <CTableBody key={data.id}>
                          <CTableRow style={{textAlign:'center'}}>
                            <CTableHeaderCell scope="row">{idx + 1}</CTableHeaderCell>
                            <CTableDataCell>{data.org_Code}</CTableDataCell>
                            <CTableDataCell>{data.org_Name}</CTableDataCell>
                            <CTableDataCell>{data.url}</CTableDataCell>
                            <CTableDataCell>{data.smsCost}</CTableDataCell>
                           {/* <CTableDataCell>{data.accessKey.substring(0, 30)}...</CTableDataCell>*/}
                            {/*<CTableDataCell>{data.apiKey.substring(0, 30)}...</CTableDataCell>*/}
                            <CTableDataCell>{data.groupID}</CTableDataCell>
                            <CTableDataCell>
                              <CButton color="primary" onClick={() => {setVisible(!visible); setDataId(data.id); getModalDataId(data.id) }} style={{display:"flex",alignItems:"center"}}>
                                <CIcon icon={cilSync} style={{marginRight:"5px"}}/> Update
                              </CButton>
                            </CTableDataCell>
                          </CTableRow>    
                        </CTableBody>
                      )) 
                    } 
                  </CTable>
                  
            </CCardBody>
        </CCard>

        







        {/** MODAL UPDATE */}






        <CModal
          backdrop="static"
          visible={visible}
          onClose={() => setVisible(false)}
          aria-labelledby="StaticBackdropExampleLabel"
          
          
        >
            <CModalHeader>
              <CModalTitle id="StaticBackdropExampleLabel">Update</CModalTitle>
            </CModalHeader>

            <CModalBody>

            <CForm onSubmit={handleUpdate}>

                <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Organisation Name</CFormLabel>
                <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Enter Organisation Name"
                    onChange={(e)=>setOrgdataModal({...orgdatamodal, orgName : e.target.value})}
                    value={orgdatamodal.orgName}
                />
                </div>

                <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Sms Cost</CFormLabel>
                <CFormInput
                    type="number"
                    id="exampleFormControlInput1"
                    placeholder="Enter The Sms Cost"
                    onChange={(e)=>setOrgdataModal({...orgdatamodal, smsCost : e.target.value})}
                    value={orgdatamodal.smsCost}
                />
                </div>
                {/*
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Access Key</CFormLabel>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Enter Access Key"
                            onChange={(e)=>setOrgdataModal({...orgdatamodal, accessKey : e.target.value})}
                            value={orgdatamodal.accessKey}
                        />
                        </div>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Api Key</CFormLabel>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Enter Api Key" 
                            onChange={(e)=>setOrgdataModal({...orgdatamodal, apiKey : e.target.value})}
                            value={orgdatamodal.apiKey}
                        />
                        </div>
                        */}
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Group Id</CFormLabel>
                        <CFormInput
                            type="number"
                            id="exampleFormControlInput1"
                            placeholder="Enter Group Id" 
                            onChange={(e)=>setOrgdataModal({...orgdatamodal,groupID : e.target.value})}
                            value={orgdatamodal.groupID}
                        />
                        </div>

                <div className="col-auto" style={{width:"100%"}}>
                    
                    { 
                     successUpdate  ? 
                            <CButton color="success" type="submit" className="mb-3" disabled style={{width:"100%"}}>
                                <CSpinner as="span" size="sm"/> Updating information ...
                            </CButton>
                          :
                          <CButton color="primary" type="submit" className="mb-3" style={{width:"100%"}}>
                                UPDATE
                          </CButton>

                    }
                    
                </div>
            </CForm>
              
            </CModalBody>
        </CModal>
    </>
  )
}

export default OrganisationList