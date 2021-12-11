import React, { useState, useEffect } from 'react'
import "../../../src/assets/css/style.css"
import Currency from "../../components/Currencies"
import { getTopTenCurrencies } from "../../../src/services/currencyServices"

function Home() {
  const [topTenCurrency, setTopTenCurrency] = useState({})

  useEffect(() => {
    getTopTenCurrencies().then((result) => {
      setTopTenCurrency(result.data)
    })

    for (var i = 0; i <= 10; i++) {
      (function (ind) {
        setTimeout(function () {
          console.log(ind)
          getTopTenCurrencies().then((result) => {
            setTopTenCurrency(result.data)
          })

        }, 30000 + (3000 * ind));
      })(i);
    }
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
      
    </div>
  )
}

export default Home
