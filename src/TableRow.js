import React from 'react'

const TableRow = ({city}) => (
  <div className='row'>
    <div className='cell id'>{city['#']}</div>
    <div className='cell'>{city['City']}</div>
    <div className='cell'>{city['Country']}</div>
    <div className='cell'>{city['All Buildings']}</div>
    <div className='cell'>{city['100m+']}</div>
    <div className='cell'>{city['200m+']}</div>
    <div className='cell'>{city['300m+']}</div>
    <div className='cell'>{city['Telecom Towers']}</div>
    <div className='cell'>{city['All Structures']}</div>
  </div>
);

export default TableRow
