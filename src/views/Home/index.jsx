import React, { useState, useEffect } from 'react'
import "../../../src/assets/css/style.css"
import Currency from "../../components/Currencies"
import { getTopTenCurrencies } from "../../../src/services/currencyServices"
import Grid from '@material-ui/core/Grid'
import { Box, makeStyles, Paper } from '@material-ui/core'

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

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

  const classes = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      {Object.values(topTenCurrency).map((currency, i) =>
        <Currency
          key={i}
          code={currency.code}
          codein={currency.codein}
          hi={currency.hi}
          low={currency.low}
        />
      )
      }

    </Box >
  );
}

export default Home
