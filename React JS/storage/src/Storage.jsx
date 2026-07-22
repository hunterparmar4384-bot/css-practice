import React from 'react'

function Storage() {
    const data = localStorage.getItem('data')
    const intro = localStorage.getItem('intro')
  return (
    <div>
      <h1>{data}</h1>
      <p>{intro}</p>
    </div>
  )
}
export default Storage