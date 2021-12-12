import React, { useState, useEffect } from 'react'
import { getCurrencyHistory } from "../../../src/services/currencyServices"
import Chart from "../../components/Chart"
import "../../../src/assets/css/style.css"
import { Grid } from '@material-ui/core'
import Currencies from '../../components/Currencies'

function DashboardCurrencies(props) {
  console.log("FFFFFFFFFFFFFFFFFFFF", props)
  const [currencyHistory, setChartCurrencyHistory] = useState({})

  useEffect(() => {
    getCurrencyHistory("USD").then((result) => {
      setChartCurrencyHistory(result.data)
    });
  }, [])

  return (
    <Grid
      container item xs={12} spacing={2}
      direction="row"
      justifyContent="center"
    >
      
        <Grid
          item xs={2}
        >
          <Currencies>
            code={currencyHistory.code}
            codein={currencyHistory.codein}
            name={currencyHistory.name}
            high={currencyHistory.high}
            low={currencyHistory.low}
            timestamp={currencyHistory.timestamp}
            created_at={currencyHistory.created_at}
          </Currencies>
        </Grid>

      )
      <Chart className="chart" />
    </Grid>

  )
}

export default DashboardCurrencies
