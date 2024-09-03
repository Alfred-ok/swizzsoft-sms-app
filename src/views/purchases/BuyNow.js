import { cilInfo } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CAlert } from '@coreui/react'
import React from 'react'

function BuyNow() {
  return (
    <>
    <CAlert color='primary' variant="solid" className="d-flex align-items-center" >
        <CIcon icon={cilInfo} className="flex-shrink-0 me-2" width={24} height={24}/>
        <div>To buy units, please contact your administrator</div>
    </CAlert>
    {/*
        <CAlert color="primary" className="d-flex align-items-center">
            <CIcon icon={cilInfo}  />
            
        </CAlert>
    */}
    </>
  )
}

export default BuyNow