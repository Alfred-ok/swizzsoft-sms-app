import { CButton, CCard, CCardBody, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CRow, CTable } from '@coreui/react'
import React from 'react'

function SentMessages() {

    const columns = [
        {
          key: 'id',
          label: 'Id',
          _props: { scope: 'col' },
        },
        {
          key: 'Source',
          label:'Source',
          _props: { scope: 'col' },
        },
        {
          key: 'Destination',
          label: 'Destination',
          _props: { scope: 'col' },
        },
        {
          key: 'Message',
          label: 'Message',
          _props: { scope: 'col' },
        },
        {
            key: 'Rate',
            label: 'Rate',
            _props: { scope: 'col' },
        },
        {
            key: 'Status',
            label: 'Status',
            _props: { scope: 'col' },
        },
        {
            key: 'Submitted',
            label: 'Submitted',
            _props: { scope: 'col' },
        },
        {
            key: 'Delivered',
            label: 'Delivered',
            _props: { scope: 'col' },
        },
      ]
      const items = [
        {
          id: '69969',
          Source: 'KPILLAR',
          Destination: '25435628373',
          Message: 'You have insufficient funds in your account.',
          Rate:'1.0',
          Status:'Submitted',
          Submitted:'2024-08-07 15:00:00',
          Delivered:'2024-08-07 15:19:44',
          _cellProps: { id: { scope: 'row' } },
        },
        {
            id: '69969',
            Source: 'KPILLAR',
            Destination: '25435628373',
            Message: 'You have insufficient funds in your account.',
            Rate:'1.0',
            Status:'Submitted',
            Submitted:'2024-08-07 15:00:00',
            Delivered:'2024-08-07 15:19:44',
            _props: { active: true },
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: '69969',
            Source: 'KPILLAR',
            Destination: '25435628373',
            Message: 'You have insufficient funds in your account.',
            Rate:'1.0',
            Status:'Submitted',
            Submitted:'2024-08-07 15:00:00',
            Delivered:'2024-08-07 15:19:44',
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: '69969',
            Source: 'KPILLAR',
            Destination: '25435628373',
            Message: 'You have insufficient funds in your account.',
            Rate:'1.0',
            Status:'Submitted',
            Submitted:'2024-08-07 15:00:00',
            Delivered:'2024-08-07 15:19:44',
            _props: { active: true },
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: '69969',
            Source: 'KPILLAR',
            Destination: '25435628373',
            Message: 'You have insufficient funds in your account.',
            Rate:'1.0',
            Status:'Submitted',
            Submitted:'2024-08-07 15:00:00',
            Delivered:'2024-08-07 15:19:44',
            _cellProps: { id: { scope: 'row' } },
          },
          {
              id: '69969',
              Source: 'KPILLAR',
              Destination: '25435628373',
              Message: 'You have insufficient funds in your account.',
              Rate:'1.0',
              Status:'Submitted',
              Submitted:'2024-08-07 15:00:00',
              Delivered:'2024-08-07 15:19:44',
              _props: { active: true },
              _cellProps: { id: { scope: 'row' } },
          },
          {
              id: '69969',
              Source: 'KPILLAR',
              Destination: '25435628373',
              Message: 'You have insufficient funds in your account.',
              Rate:'1.0',
              Status:'Submitted',
              Submitted:'2024-08-07 15:00:00',
              Delivered:'2024-08-07 15:19:44',
              _cellProps: { id: { scope: 'row' } },
          },
          {
              id: '69969',
              Source: 'KPILLAR',
              Destination: '25435628373',
              Message: 'You have insufficient funds in your account.',
              Rate:'1.0',
              Status:'Submitted',
              Submitted:'2024-08-07 15:00:00',
              Delivered:'2024-08-07 15:19:44',
              _props: { active: true },
              _cellProps: { id: { scope: 'row' } },
          },
          {
            id: '69969',
            Source: 'KPILLAR',
            Destination: '25435628373',
            Message: 'You have insufficient funds in your account.',
            Rate:'1.0',
            Status:'Submitted',
            Submitted:'2024-08-07 15:00:00',
            Delivered:'2024-08-07 15:19:44',
            _cellProps: { id: { scope: 'row' } },
          },
          {
              id: '69969',
              Source: 'KPILLAR',
              Destination: '25435628373',
              Message: 'You have insufficient funds in your account.',
              Rate:'1.0',
              Status:'Submitted',
              Submitted:'2024-08-07 15:00:00',
              Delivered:'2024-08-07 15:19:44',
              _props: { active: true },
              _cellProps: { id: { scope: 'row' } },
          },
          {
              id: '69969',
              Source: 'KPILLAR',
              Destination: '25435628373',
              Message: 'You have insufficient funds in your account.',
              Rate:'1.0',
              Status:'Submitted',
              Submitted:'2024-08-07 15:00:00',
              Delivered:'2024-08-07 15:19:44',
              _cellProps: { id: { scope: 'row' } },
          },
          {
              id: '69969',
              Source: 'KPILLAR',
              Destination: '25435628373',
              Message: 'You have insufficient funds in your account.',
              Rate:'1.0',
              Status:'Submitted',
              Submitted:'2024-08-07 15:00:00',
              Delivered:'2024-08-07 15:19:44',
              _props: { active: true },
              _cellProps: { id: { scope: 'row' } },
          },
          {
            id: '69969',
            Source: 'KPILLAR',
            Destination: '25435628373',
            Message: 'You have insufficient funds in your account.',
            Rate:'1.0',
            Status:'Submitted',
            Submitted:'2024-08-07 15:00:00',
            Delivered:'2024-08-07 15:19:44',
            _cellProps: { id: { scope: 'row' } },
          },
          {
              id: '69969',
              Source: 'KPILLAR',
              Destination: '25435628373',
              Message: 'You have insufficient funds in your account.',
              Rate:'1.0',
              Status:'Submitted',
              Submitted:'2024-08-07 15:00:00',
              Delivered:'2024-08-07 15:19:44',
              _props: { active: true },
              _cellProps: { id: { scope: 'row' } },
          },
          {
              id: '69969',
              Source: 'KPILLAR',
              Destination: '25435628373',
              Message: 'You have insufficient funds in your account.',
              Rate:'1.0',
              Status:'Submitted',
              Submitted:'2024-08-07 15:00:00',
              Delivered:'2024-08-07 15:19:44',
              _cellProps: { id: { scope: 'row' } },
          },
          {
              id: '69969',
              Source: 'KPILLAR',
              Destination: '25435628373',
              Message: 'You have insufficient funds in your account.',
              Rate:'1.0',
              Status:'Submitted',
              Submitted:'2024-08-07 15:00:00',
              Delivered:'2024-08-07 15:19:44',
              _props: { active: true },
              _cellProps: { id: { scope: 'row' } },
          },
        
          
      ]
  return (
    <>
         <CCard style={{marginBottom:'30px', boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)' }}>
            <CCardBody>
                <CCardTitle>
                    <h4>Sent Messages</h4>
                </CCardTitle>
                
                    
                    <CForm>
                        <CRow>
                        <CCol>
                            <div>
                            <CFormLabel htmlFor="exampleFormControlInput1">Destination</CFormLabel>
                            <CFormInput
                                type="number"
                                id="exampleFormControlInput1"
                                placeholder="2547XXXXXXXX, 2547XXXXXXXX"
                            />
                            </div>
                        </CCol>
                        <CCol>
                            <div>
                            <CFormLabel htmlFor="exampleFormControlInput1">Sender ID</CFormLabel>
                            <CFormInput
                                type="text"
                                id="exampleFormControlInput1"
                                placeholder="Sender Id"
                            />
                            </div>
                        </CCol>
                        <CCol>
                            <div>
                            <CFormLabel htmlFor="exampleFormControlInput1">From</CFormLabel>
                            <CFormInput
                                type="Date"
                                id="exampleFormControlInput1"
                                placeholder="From"
                            />
                            </div>
                        </CCol>
                        <CCol>
                            <div>
                            <CFormLabel htmlFor="exampleFormControlInput1">To</CFormLabel>
                            <CFormInput
                                type="Date"
                                id="exampleFormControlInput1"
                                placeholder="To"
                            />
                            </div>
                        </CCol>
                        <CCol>
                            <div style={{marginTop:"30px"}}>
                                <CButton color="primary" type="submit" className="mb-3">
                                    SUBMIT
                                </CButton>
                            </div>
                        </CCol>
                        </CRow>
                        
                    </CForm>

                    <CTable bordered  columns={columns} items={items} style={{marginTop: '40px'}}/>
            </CCardBody>
        </CCard>
    </>
  )
}

export default SentMessages