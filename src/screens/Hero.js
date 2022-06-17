import React from 'react'
import { Col,Row, Container } from 'react-bootstrap'

function Hero() {
  return (
    <div>
      <Container>
      <h1>オタク店</h1>
      <p>Bienvenido a Otaku Store</p>
      <Row>
      <Col><img src="https://i.imgur.com/XyqQZQZ.png" alt="Otaku Store" width="500" height="500"/></Col>
      <Col>
      <p>
        Todos los disfraces de tus amines favoritos en un sólo lugar.
      </p>
      <input type="button" value="Ver productos" className='boton'/>
      <input type="button" value="saber más" className='boton-outline'/>
      </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Hero