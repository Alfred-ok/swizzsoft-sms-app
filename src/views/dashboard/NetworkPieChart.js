import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

function NetworkPieChart() {
  return (
    <>
        <CChart
            style={{ padding: '10px', width: '100%'}}
            type="doughnut"
            data={{
                labels: ['Telkom', 'Airtel', 'Safaricom', 'Faiba'],
                datasets: [
                {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                },
                ],
            }}
            options={{
                plugins: {
                legend: {
                    labels: {
                    color: getStyle('--cui-body-color'),
                    }
                }
                },
            }}
        />
    </>
  )
}

export default NetworkPieChart