import React from 'react'
import "../assets/css/style.css"
import { Link } from 'react-router-dom'
import { Button, Paper } from '@material-ui/core'
import StarRateIcon from '@material-ui/icons/StarRate';

function Currencies({ id, code, codein, name, hi, low, timestamp, created_at }) {
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
      </div>
      <div className="price">
        <p className="price__hi">R$ {hi}</p>
        <p className="price__low">R$ {low}</p>
      </div>
      
      <div className="button__container">
        <div>
          <Link className="link" path={`/${code}`} to="/currencies">Details</Link>
        </div>
        <div >
          <Button onClick={handleClick}>
            <StarRateIcon className="star" />
          </Button>
        </div>
      </div>
    </Paper>
  )
}

export default Currencies
