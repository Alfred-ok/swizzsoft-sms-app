import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CRow } from '@coreui/react'
import React from 'react'
import { DocsExample } from '../../components'
import Contactstab from './Contactstab'

function SendSms() {
  return (
    <>
        <CRow>
            <CCol xs={8}>
                <CCard className="mb-4">
                <CCardHeader style={{backgroundColor:'#fff'}}>
                    <h4>Send Sms</h4>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Campaigns Name</CFormLabel>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="06 Aug 15:56"
                        />
                        </div>

                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Sender ID</CFormLabel>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Sender Id"
                        />
                        </div>
                        
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Contacts (comma separated)</CFormLabel>
                        <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
                        </div>

                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Enter Message</CFormLabel>
                        <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
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

            <CCol xs={4}>
                <Contactstab/>
            </CCol>
        </CRow>
    </>
  )
}

export default SendSms