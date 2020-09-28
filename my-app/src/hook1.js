import React, { useState } from "react";
import ReactDOM from "react-dom";

function Multiplicator() {
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
}
ReactDOM.render(<Multiplicator />, document.getElementById('root'))