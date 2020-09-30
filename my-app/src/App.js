import React, { useEffect, useState } from "react";
import ProductList from "./productList";

import axios from "axios";

function App(){
    const [products, setProducts] = useState();
    const [load, setLoad] = useState(false);
    const [username, setUsername] = useState("Hala");
    const [logintime, setLogintime] = useState(new Date().getTime());

    useEffect(() => {
    axios
    .get('https://www.hulabeck.se/html/temp/products.json')
    .then((res) => {
        setProducts(res.data.products);
        setLoad(true);
    })
    .catch((err)=>{
        console.error(err);
    });

    }, []);
    

    if(load){
        return (
            <div>
                <h1>Webshop</h1>
                <ProductList
                products= {products}
                username= {username}
                logintime= {logintime}
                />
            </div>
        );
    }else{
        return (
            <h1>Loading...</h1>
        );
    }
    
}

export default App;
