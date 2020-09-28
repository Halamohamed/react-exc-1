import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function FirstName(props){
    let [fname, setFname]= useState(props.fname);
    const [count, setCount] = useState(0);
    const onSubmit = (e) => {
        e.preventDefault();
        setFname(e.target.fname.value);
    }
    const nameChanger = (e) => {
        if (e.target.value.length > 3) {
            fname = e.target.value;
            setFname(e.target.value);
        }
    };
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        }, [count]); // Only re-run the effect if count changes
    
    return ( 
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        
        <form onSubmit={onSubmit}>
            
            <input name="fname" type="text" placeholder="enter name" onChange={(e) => nameChanger(e)}/>
            <button  >submit</button>
        </form>
        <p>{fname}</p>
            

        </div>
    )

}

/*function Multiplicator() {
    const [numbers, setNumbers] = useState([4,3]);
    const [total, setTotal ] = useState(0);

    return ( 
        <div>
            <p>
                {numbers[0] }och {numbers[1]}
            </p>
    <p>{total}</p>
    <button onClick={() => setTotal(numbers[0] * numbers[1])}>
        Multiplicera
    </button>

        </div>
    )
}*/
ReactDOM.render(<FirstName fname = "Hala" />, document.getElementById('root'));