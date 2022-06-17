import React from 'react'
import DataList from './DataList'
import Itemcard from './Itemcard'

import {Row, Col} from 'react-bootstrap';

function RenderList() {

    return (
    <div>
      <Row>
         {DataList.map((item) =>{
            const {id, title, description, price, image, moreImage} = item;
            return (
              <Col xs={3}>     
                <div>
                <Itemcard 
                id={id} 
                title={title} 
                description={description}
                price={price}
                image={image} 
                moreImage= {moreImage}/>
                </div>
                </Col>
                )
    })
}
    </Row>
    </div>

    
   
    
    


  )
}

export default RenderList