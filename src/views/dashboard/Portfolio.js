import React from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'

import {
    CButton,
    CButtonGroup,
    CCol,
    CRow,
  } from '@coreui/react'


const Portfolio = () => {
    return (
        <>
            <CRow>
                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                    <CChart
                        type="line" 
                        data={{
                            labels: ["January", "March", "May", "July", "September", "November", "December"],
                            datasets: [
                                {
                                    label: "First Investment",
                                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                                    borderColor: "rgba(255, 0, 0, 1)",
                                    pointBackgroundColor: "rgba(255, 0, 0, 1)",
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                },
                                {
                                    label: "Second Investment",
                                    backgroundColor: "rgba(0, 255, 0, 0.2)",
                                    borderColor: "rgba(0, 255, 0, 1)",
                                    pointBackgroundColor: "rgba(0, 255, 0, 1)",
                                    data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
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
                            scales: {
                                x: {
                                    grid: {
                                        color: getStyle('--cui-border-color-translucent'),
                                    },
                                    ticks: {
                                        color: getStyle('--cui-body-color'),
                                    },
                                },
                                y: {
                                    grid: {
                                        color: getStyle('--cui-border-color-translucent'),
                                    },
                                    ticks: {
                                        color: getStyle('--cui-body-color'),
                                    },
                                },
                            },
                        }}
                    />
                </CCol>
                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                    <CChart
                        type="doughnut"
                        data={{
                            labels: ['Tech', 'Medicine', 'Financial', 'Construction'],
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
                </CCol>
            </CRow>
        </>
    )
}

export default Portfolio
