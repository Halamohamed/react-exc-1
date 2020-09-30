import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";


function Country(){
    const [land, setLand]= useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");
    const [counter, setCounter] = useState(0);
    
   
    
 
   
    useEffect(() => {
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then((res) => {
            setLoad(true);
            setLand(res.data);
            console.log("laddar listan");
        })
        .catch((err) => {
            setError(err.message);
            setLoad(true);
        });
        }, []); // Only re-run the effect if cities changes

         const sortCountries = () =>{
            let countries = [...land];
            countries.sort((a,b) => {
                return b.population - a.population;
            });
            setLand(countries);
            setCounter(counter +1);
        }
        if(load){
            return (
                <div>
                    <p>Antal klick: {counter}</p>
                    <button onClick={sortCountries}> Sortera</button>
                    <ol>
                        {error ? (
                            <li>{error.message}</li>
                        ):(
                            land.map((country, index) =>(
                                <li key={index}>
                                {country.name} ({country.population})
                                </li>
                            ))
                            
                        )}
                    </ol>
                </div>
            );
        }else {
            return <div>Laddar ...</div>
        }
    
    

}



ReactDOM.render(<Country />, document.getElementById('root'));