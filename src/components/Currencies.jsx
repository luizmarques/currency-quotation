import React from 'react'
import "../assets/css/style.css"
import { Button, Paper } from '@material-ui/core'
import StarRateIcon from '@material-ui/icons/StarRate'

function Currencies({ id, code, codein, name, high, low, timestamp, create_date, handleClickStar, handleClickCurrency }) {

  return (
    <Paper
      elevation={5}
      className="paper"
    >
      <div className="code">
        <p>{code}</p>
        <Button>
          <StarRateIcon className="star" onClick={handleClickStar} />
        </Button>
      </div>
      <div className="price">
        <p className="price__high">R$ {high}</p>
        <p className="price__low">R$ {low}</p>
      </div>

      <div className="button__container">
        <div>
          <Button className="button" variant="contained" color="primary" onClick={handleClickCurrency} > Chart</Button>
        </div>
        <div >
        </div>
      </div>
      <p className="create">{create_date}</p>
    </Paper>
  )
}

export default Currencies
