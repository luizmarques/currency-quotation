import React, { useState } from 'react'
import "../assets/css/style.css"
import { Button, Paper } from '@material-ui/core'
import { StarRate } from '@material-ui/icons'


function Currencies({ id, code, codein, name, high, low, timestamp, create_date,notFavorite, isFavorite, handleClickStar, handleClickCurrency }) {
  const [favorite, setFavorite] = useState(false)
  return (
    <Paper
      elevation={5}
      className="paper"
    >
      <div className="code">
        <p>{code}</p>
        <Button onClick={() => setFavorite(!favorite)}>
          {favorite? 
            (<StarRate style={{ color: "#FFD700" }} className="star" onClick={handleClickStar} />)
            : (<StarRate style={{ color: "white" }} className="star" onClick={handleClickStar} />)}
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
