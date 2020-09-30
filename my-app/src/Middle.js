import React from "react";
import Bottom from "./bottom";
import {ProductContext, Product} from "./ProductContext";


const Middle = (props) => {
    return(
        <div>
            <h2>{props.greeting}</h2>
        <ProductContext.Consumer>
            {() => <p> {Product.name}</p>}
        </ProductContext.Consumer>
        <Bottom />
        </div>

    );
};

export default Middle;