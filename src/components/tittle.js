import React from 'react'

const tittle = (props) => {
  return (
    <div>
      <div className='border-bottom pb-4 mb-4'>
        <h1>Hello, {props.name}</h1>
        <p>Hello, {props.dic}</p>
      </div>
    </div>
  )
}

export default tittle
