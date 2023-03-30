import React from 'react'

const moon = ({name, radius, history}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h4>{radius}</h4>
        <h5>{history}</h5>
    </div>
  )
}

export default moon