import React from 'react'
import imagen from "../assets/sp_yor/1.jpg"

function Itemcard({id, title, description, price, image, moreImage}) {
  return (
    <div>

    <img 
    style={{"width":"100%"}}
    src={require(`../assets/${image}`)} alt="aqui va una imagen" />
    <h2>{title}</h2>
    <p>{description}</p>
    <p>{price}</p>

    </div>
  )
}

export default Itemcard