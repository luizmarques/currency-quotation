import React, { useState, useEffect } from 'react'
import "../../../src/assets/css/style.css"
import Currency from "../../components/Currencies"
import { getCurrencyHistory, getTopTenCurrencies } from "../../../src/services/currencyServices"
import Chart from "../../components/Chart"

function Home() {
  const [topTenCurrency, setTopTenCurrency] = useState({})
  const [chartCurrencyHistory, setChartCurrencyHistory] = useState({})

  useEffect(() => {
    getTopTenCurrencies().then((result) => {
      setTopTenCurrency(result.data)
    })
    getCurrencyHistory().then((result) => {
      setChartCurrencyHistory(result.data)
    })
  }, [])

  return (
    <div className="home">
      <div className="home__row">
        {Object.values(topTenCurrency).map((currency, i) =>
          <Currency key={i}
            code={currency.code}
            codein={currency.codein}
            name={currency.name}
            hi={currency.hi}
            low={currency.low}
            timestamp={currency.timestamp}
            created_at={currency.created_at}
            >
          </Currency>
        )}
      </div>
      <div className="home__row">
        {Object.values(chartCurrencyHistory).map((currencyHistory, i) =>
          <Chart key={i}
            code={currencyHistory.code}
            codein={currencyHistory.codein}
            name={currencyHistory.name}
            hi={currencyHistory.hi}
            low={currencyHistory.low}
            timestamp={currencyHistory.timestamp}
            created_at={currencyHistory.created_at}
            >
          </Chart>
        )}
      </div>
    </div>
  )
}

export default Home
