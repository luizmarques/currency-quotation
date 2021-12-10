import React from 'react'
import "../assets/css/style.css"

function Chart({ id, code, codein, name, hi, low, timestamp, created_at }) {
  return (
    <div className="currency">
      <div className="currency__info">
        <p>{code}</p>
        <p>{codein}</p>
        <p>{name}</p>
        <p>{hi}</p>
        <p>{low}</p>
        <p>{timestamp}</p>
        <p>{created_at}</p>
      </div>
    </div>
  )
}

export default Chart
