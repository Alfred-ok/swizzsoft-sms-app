import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CRow } from '@coreui/react'
import React, { useState } from 'react'
import { DocsExample } from '../../components'

function SendSms() {

    const [senderID, setSenderID] = useState();
    const [contact, setContact] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = async(e)=>{
        e.preventDefault()
    
        try {
       
            const response = await fetch("http://localhost:8080/messagein", {
                method: 'POST', // Specify the request method as POST
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                    // Add other headers as necessary
                },
                body: JSON.stringify(
                    {
                        phoneNumber : contact,
                        message : message,
                        msgStatus : "1",
                        sendStatus :"SEND"
        
                    }
                ) // Convert the data to a JSON string for the body
            });
       
            // Check if the response is okay (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
         
            // Parse the JSON response
            const responseData = await response.json();
            //return responseData; // Return the parsed JSON
            
            console.log(contact, senderID,message)
        // setShowdashboard(true)
    
        }catch (error) {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        }
    
      }



  return (
    <>
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4" style={{ boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)' }}>
                
                <CCardBody>
                    <CCardTitle>
                        <h3>Send Sms</h3>
                    </CCardTitle>
                    <CForm onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Select Sender ID</CFormLabel>
                        <CFormSelect 
                            id="exampleFormControlInput1"
                            aria-label="Default select example"
                            options={[
                                'Select Sender Id',
                                { label: 'KFL', value: '1' },
                                { label: 'KIKAPU', value: '2' },
                                { label: 'MkulimaPoint', value: '3' },
                                { label: 'KENYAMIDLAND', value: '4' },
                                { label: 'AINABOI', value: '5' },
                                { label: 'LEPESA', value: '6' },
                            ]}
                            onChange={(e)=>setSenderID(e.target.value)}
                            />
                        </div>
                        
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Contacts (comma separated)</CFormLabel>
                        <CFormTextarea  id="exampleFormControlTextarea1" rows={3} onChange={(e)=>setContact(e.target.value)} ></CFormTextarea>
                        </div>

                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Enter Message</CFormLabel>
                        <CFormTextarea id="exampleFormControlTextarea1" rows={3} onChange={(e)=>setMessage(e.target.value)}></CFormTextarea>
                        <p>Characters: 0/1224 <span style={{color:'grey', margin:'0px 10px'}}>|</span> Pages: 1/8</p>
                        </div>

                        <div className="col-auto">
                            <CButton color="primary" type="submit" className="mb-3">
                                SUBMIT
                            </CButton>
                        </div>
                    </CForm>
                </CCardBody>
                </CCard>
            </CCol>

        </CRow>
    </>
  )
}

export default SendSms