import React, { useState, useEffect } from 'react'
import "../../../src/assets/css/style.css"
import { getCurrencyHistory, getTopTenCurrencies } from "../../../src/services/currencyServices"
import Grid from '@material-ui/core/Grid'
import Chart from '../../components/Chart'
import Currencies from '../../components/Currencies'
import { updateUserFavoriteCurrency } from '../../services/userServices'


function Home() {
  const [topTenCurrency, setTopTenCurrency] = useState({})

  const callGetTopTenCurrencies = async () => {
    try {
      const result = await getTopTenCurrencies()
      setTopTenCurrency(result.data)
      localStorage.setItem('@currency_quotation/topTenCurrency', JSON.stringify(result.data))
    } catch (e) {
      console.log(e)
    }
    setTimeout(callGetTopTenCurrencies, 10000)
  }

  useEffect(() => {
    callGetTopTenCurrencies()
    getCurrencyHistory("USD").then((result) => {
      setChartCurrencyHistory(result.data)
    });
  }, [])

  const [currencyHistory, setChartCurrencyHistory] = useState([])
  const handleClick = (code) => {
    getCurrencyHistory(code).then((result) => {
      setChartCurrencyHistory(result.data)
      localStorage.setItem('@currency_quotation/currencyHistory', JSON.stringify(result.data))
    });
  }

  const [favoriteCurrency, setfavoriteCurrency] = useState({})
  const handleClickStar = (code) => {
    updateUserFavoriteCurrency(code).then((result) => {
      setTopTenCurrency(result.data)
      const res = localStorage.setItem('@currency_quotation/favoriteCurrency', JSON.stringify(result.data.favoriteCurrency))
      console.log(res)
    });
  }

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
              handleClickCurrency={() => { handleClick(currency.code) }}
              handleClickStar={() => { handleClickStar(currency.code) }}
              key={i}
              code={currency.code}
              codein={currency.codein}
              timestamp={currency.timestamp}
              high={currency.high}
              low={currency.low}
              timestamp={currency.timestamp}
              create_date={currency.create_date}
            />
          </Grid>
        )
        }
        <Chart currencyHistory={currencyHistory} />
      </Grid>
    </div>
  );
}

export default Home
