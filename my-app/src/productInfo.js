import React from "react";
import "./productinfo.css";


const ProductInfo = (props) => {
    return (
        <article>
            <h3>{props.product.name}</h3>
            <h4>Pris: {props.product.consumerPrice}</h4>
            {Object.entries(props.product).map(([key, value])=> {
                if(
                    ![
                        "name", "consumerPrice", "id", "imageUrl", "categories",
                    ].includes(key)
                ){
                    return (
                        <p>
                            <b>{key}: </b> {value}
                        </p>
                    );
                }
            })}
            {props.username} och {props.logintime}
        </article>
    );
}

export default ProductInfo;