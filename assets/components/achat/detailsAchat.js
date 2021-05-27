import ReactDOM from 'react-dom';

import React, { useState } from "react";

function App() {
    const [inputList, setInputList] = useState([{ produit: "", quantite: "", prix: "" }]);

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
        setInputList([...inputList, { produit: "", quantite: "", prix: "" }]);
    };

    return (
        <div className="App">
        <h3><a href="https://cluemediator.com">Details</a></h3>
    {inputList.map((x, i) => {
        return (
            <div className="box row" key={i}>
                <input
                    name={"achat[details][" + i +"][ingredient]"}
                    className="form-control col-md-3"
                    placeholder="Ingredient"
                    value={x.produit}
                    onChange={e => handleInputChange(e, i)}
                />
                <input
                    className="form-control ml10 col-md-3"
                    name={"achat[details][" + i +"][quantite]"}
                    placeholder="Quantité"
                    value={x.quantite}
                    onChange={e => handleInputChange(e, i)}
                />
                <input
                    className="form-control ml10 col-md-3"
                    name={"achat[details][" + i +"][prixUnitaire]"}
                    placeholder="Prix Unitaire"
                    value={x.prix}
                    onChange={e => handleInputChange(e, i)}
                />
                <div className="btn-box col-md-3">
                    {inputList.length !== 1 && <button
                    className="mr10 btn btn-danger"
                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                    {inputList.length - 1 === i && <button className="btn btn-success" onClick={handleAddClick}>Add</button>}
                </div>
            </div>
        );
    })}
        </div>
    );
}






ReactDOM.render(
<App
/>,
    document.getElementById('details')
)