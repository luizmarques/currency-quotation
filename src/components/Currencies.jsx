import React from 'react'
import "../assets/css/style.css"
import { Button, Paper } from '@material-ui/core'
import StarRateIcon from '@material-ui/icons/StarRate'

function Currencies({ id, code, codein, name, high, low, timestamp, created_at }) {
  const handleClick = () => {
    //chamar a função para atualizar usuario com moeda favorita

  }
  return (
    <Paper
      elevation={5}
      className="paper"
    >
      <div className="code">
        <p>{code}</p>
        <Button onClick={handleClick}>
          <StarRateIcon className="star" />
        </Button>
      </div>
      <div className="price">
        <p className="price__hi">R$ {high}</p>
        <p className="price__low">R$ {low}</p>
      </div>

      <div className="button__container">
        <div>

          <Button className="button" variant="contained" color="primary" to="/currencies">Details</Button>
        </div>
        <div >

        </div>
      </div>
    </Paper>
  )
}

export default Currencies
