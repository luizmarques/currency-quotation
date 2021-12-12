import React, { useState, useEffect } from 'react'
import "../../../src/assets/css/style.css"
import { getCurrencyHistory, getTopTenCurrencies } from "../../../src/services/currencyServices"
import Grid from '@material-ui/core/Grid'
import Chart from '../../components/Chart'
import Currencies from '../../components/Currencies'

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

  const [currencyHistory, setChartCurrencyHistory] = useState({})

  getCurrencyHistory(currencyHistory.code || "USD").then((result) => {
    setChartCurrencyHistory(result.data)
  });



  return (
    <div>
      <Grid
        container item xs={12} spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {Object.values(topTenCurrency).map((currency, i) =>
          <Grid
            item xs={5}
            item sm={3}
            item md={2}
            item lg={2}
            item xl={1}
          >
            <Currencies
              key={i}
              code={currency.code}
              codein={currency.codein}
              high={currency.high}
              low={currency.low}
              timestamp={currency.timestamp}
              created_at={currency.created_at}
            />
          </Grid>
        )
        }
        <Chart />
      </Grid>
    </div>
  );
}

export default Home
