import React from 'react'
import TableRow from './TableRow'

const CityTable = ({headers, cities}) => (
  <div className='table'>
    <TableRow key='Headers' city={headers} />
    {
      cities.map(c => <TableRow key={c['City']} city={c}/>)
    }
  </div>
)

export default CityTable
