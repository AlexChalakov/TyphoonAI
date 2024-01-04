import React from 'react'

import {
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

const DataAnalysis = () => {

    return (
        <>
            <WidgetsDropdown className="mb-4" />
            <CRow>
                <CCardBody>
                    <CRow>
                        <CCol sm={5}>
                            <h4 id="traffic" className="card-title mb-0">
                                Data Analysis
                            </h4>
                        </CCol>
                    </CRow>
                    <CChart 
                        type="radar"
                        data={{
                            labels: [
                                'Debt',
                                'Revenue',
                                'Assets',
                                'Cash Flow',
                                'Income',
                                'Equity',
                                'Finance',
                            ],
                            datasets: [
                                {
                                    label: 'Data from Jan-July',
                                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                    borderColor: 'rgba(255, 99, 132, 1)',
                                    pointBackgroundColor: 'rgba(255, 99, 132, 1)', 
                                    pointBorderColor: '#fff',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgba(255, 99, 132, 1)',
                                    data: [65, 59, 90, 81, 56, 55, 40],
                                },
                                {
                                    label: 'Data from July-December',
                                    backgroundColor: 'rgba(54, 162, 235, 0.2)', 
                                    borderColor: 'rgba(54, 162, 235, 1)', 
                                    pointBackgroundColor: 'rgba(54, 162, 235, 1)', 
                                    pointBorderColor: '#fff',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgba(54, 162, 235, 1)',
                                    data: [28, 48, 40, 19, 96, 27, 100],
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
                                r: {
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
                </CCardBody>
            </CRow>
        </>
    )
}

export default DataAnalysis
