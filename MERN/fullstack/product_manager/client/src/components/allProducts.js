import React from 'react';
const ProductBox = (props) => {
    return(
        <div>
            <h2>{props.product.title}</h2>
            <h3> Price: {props.product.price}</h3>
            <h3> {props.product.description}</h3>
        </div>
        
    )
}

export default ProductBox