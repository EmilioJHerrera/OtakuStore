import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DataMainList from './DataMainList';

const RenderMainList = () => {
  return (
    <div>

        <h2>Animes relacionados con nuestros productos</h2>
        <Row>
        {DataMainList.map((item)=>{
            return(
                <Col>
                <img src={require(`../assets/mains/${item}`)} alt="aqui va una imagen" />
                </Col>
            )
        } 

        )}
        </Row>
    </div>
  )
}

export default RenderMainList