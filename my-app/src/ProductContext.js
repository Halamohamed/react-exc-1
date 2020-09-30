import React from "react";

const Product = {
    name: 'Diskmaskin',
    price: 3456,
};
const ProductContext = React.createContext(Product);
export {ProductContext , Product};