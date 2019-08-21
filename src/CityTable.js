import React from 'react'
import TableRow from './TableRow'

const CityTable = ({cities}) => (
  <div className='table'>
    <TableRow key='Headers' city={headers} />
    {
      cities.map(c => <TableRow key={c['City']} city={c}/>)
    }
  </div>
)

export default CityTable

const headers = {"#":"#","City":"City","Country":"Country","All Buildings":"All Buildings","100m+":"100m+","150m+":"150m+","200m+":"200m+","300m+":"300m+","Telecom Towers":"Telecom Towers","All Structures":"All Structures"}
