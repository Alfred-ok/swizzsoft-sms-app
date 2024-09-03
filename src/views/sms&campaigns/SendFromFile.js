import { CButton, CCard, CCardBody, CCardTitle, CForm, CFormInput } from '@coreui/react'
import React from 'react'

function SendFromFile() {
  return (
    <>
        <CCard>
            <CCardBody>
                <CCardTitle>
                    <h4>Send from file</h4>
                </CCardTitle>
                <CForm >
                    <div className="mb-3">
                        <CFormInput type="file" id="formFileMultiple" label="Input Multiple files " multiple />
                    </div>

                    <CButton color="primary" type="submit" className="mb-3">
                        Upload
                    </CButton>
                </CForm>
                
                
            </CCardBody>
        </CCard>
    </>
  )
}

export default SendFromFile