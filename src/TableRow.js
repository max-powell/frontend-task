import React from 'react'

const TableRow = ({city}) => (
  <div className='row'>
    {
      city.map(p => <div className='cell'>{p}</div>)
    }
  </div>
);

export default TableRow
