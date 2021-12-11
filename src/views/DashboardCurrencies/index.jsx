import React, { useState, useEffect } from 'react'
import { getCurrencyHistory } from "../../../src/services/currencyServices"
import Chart from "../../components/Chart"
import "../../../src/assets/css/style.css"


function DashboardCurrencies() {
  const [currencyHistory, setChartCurrencyHistory] = useState({})

  useEffect(() => {
    getCurrencyHistory("USD").then((result) => {
      setChartCurrencyHistory(result.data)
    });
  }, [])
  

  return (
    <div className="home">
      <div className="home__row">
        {Object.values(currencyHistory).map((currencyHistory, i) =>
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

export default DashboardCurrencies
