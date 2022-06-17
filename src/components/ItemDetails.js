import React, {useState} from 'react';

import DataList from './DataList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemDetails() {
  const {id, title, description, price, image, moreImage,details} = DataList[6];
  const {fuente, nombre, tela, peso} = details;
  const [primaryImage, setPrimaryImage] = useState(image);

    return (
    <div>
        <Container>
            <Row>
                <Col>
                
        <aside>
            {DataList[6].moreImage.map((item)=>{
                console.log(item);
                return(
                    <img
                    onClick={()=>{setPrimaryImage(item)}}
                    style={{"width":"80%", "display":"block"}} 
                    src={require(`../assets/${item}`)}
                     alt="..." />
                )
            })}
        </aside>
        </Col>
            
        <Col xs={5}>    

        <figure>
            <img 
            style={{"width":"100%"}}
            src={require(`../assets/${primaryImage}`)} alt="..." />
        </figure>
        </Col>
    
        <Col xs={5}>
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>

            <label>Talla:</label>

            <select name="size" id="cars">
            <option value="--" disabled>Selecciona una</option>
            <option value="fs">Femenina s</option>
            <option value="fm">Femenina m</option>
            <option value="ms">Masculina s</option>
            <option value="mm">Masculina m</option>
            </select>
            <button>comprar</button>

            <div>
                <h3>Detalles</h3>
                <p>Fuente: {fuente}</p>
                <p>Personaje: {nombre}</p>
                <p>Tipo de tela: {tela}</p>
                <p>Peso neto: {peso}</p>
            </div>

        </section>
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default ItemDetails