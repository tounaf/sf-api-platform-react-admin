import ReactDOM from 'react-dom';

import React, { useState } from "react";

function App() {
    const [inputList, setInputList] = useState([{ produit: "", quantite: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { produit: "", quantite: "" }]);
    };

    return (
        <div className="App">
        <h3><a href="https://cluemediator.com">Details</a></h3>
    {inputList.map((x, i) => {
        return (
            <div className="box" key={i}>
            <input
        name="produit"
        placeholder="Enter First Name"
        value={x.produit}
        onChange={e => handleInputChange(e, i)}
        />
        <input
        className="ml10"
        name="quantite"
        placeholder="Enter Last Name"
        value={x.quantite}
        onChange={e => handleInputChange(e, i)}
        />
        <div className="btn-box">
            {inputList.length !== 1 && <button
        className="mr10"
        onClick={() => handleRemoveClick(i)}>Remove</button>}
        {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
            </div>
        );
    })}
    <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
        </div>
    );
}






ReactDOM.render(
<App
/>,
    document.getElementById('details')
)