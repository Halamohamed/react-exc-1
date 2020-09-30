import React from "react";
import ProductInfo from "./productInfo";
import "./productlist.css";

const ProductList = (props)=> {
    console.log(props);
    return (
        <section className="productlist">
            {props.products.map((prod, index) => (
                <ProductInfo
                key= {index}
                product= {prod}
                username= {props.username}
                logintime= {props.logintime} 
                />
            ))}
        </section>
    );
}

export default ProductList;