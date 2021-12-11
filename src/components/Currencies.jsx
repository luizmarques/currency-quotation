import React from 'react'
import "../assets/css/style.css"
import { useHistory } from 'react-router'
import { getCurrencyHistory } from '../services/currencyServices'
import { Link } from 'react-router-dom'

function Currencies({ id, code, codein, name, hi, low, timestamp, created_at }) {
  const history = useHistory()

  const catchCode = async () => {
    const result = await getCurrencyHistory(code)
    const currencyHistory = localStorage.setItem('@currency_quotation/currencyHistory', currencyHistory)
    console.log(currencyHistory)

    history.push(`/currencies`);
  }

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
      <div>
        <Link to="/currencies">Details</Link>
      </div>
    </div>

  )
}

export default Currencies
