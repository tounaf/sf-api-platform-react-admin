import React, { Component } from "react";
import ingredientService from "../service/ingredientService";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

export default class IngredientList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            ingredients: [],
            currentTutorial: null,
            currentIndex: -1,
            searchTitle: "",
            inputList: [{ produit: "", quantite: "", prix: "" }]
        };
    }

    componentDidMount() {
        this.retrieveTutorials();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    // handle input change
    handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    handleAddClick = () => {
        setInputList([...inputList, { produit: "", quantite: "", prix: "" }]);
    };

    retrieveTutorials() {
        ingredientService.getAll()
            .then(response => {
                this.setState({
                    ingredients: response.data
                });
                console.log(this.state.ingredients);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveTutorials();
        this.setState({
            currentTutorial: null,
            currentIndex: -1
        });
    }

    setActiveTutorial(tutorial, index) {
        this.setState({
            currentTutorial: tutorial,
            currentIndex: index
        });
    }

    removeAllTutorials() {
        ingredientService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchTitle() {
        ingredientService.findByTitle(this.state.searchTitle)
            .then(response => {
                this.setState({
                    ingredients: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {

        console.log(this.state);
        const { ingredients,currentTutorial,currentIndex,searchTitle,inputList } = this.state;
        console.log(ingredients);
        // ];
        return (
            <div className="App">
                <h3><a href="https://cluemediator.com">Details</a></h3>
                <div>
                <ul>
                    {ingredients.map((ing) => (
                    <li value={ing.id} key={ing.libelle}>{ing.libelle}</li>
                    ))}
                </ul>
                </div>
                <form>

                {this.state.inputList.map((x, i) => {
                    return (
                        <div className="box row" key={i}>
                        <select className="form-control col-md-3">
                            {ingredients.map((ing, index) => (
                            <option value={ing.id} key={index}>{ing.libelle}</option>
                            ))}
                        </select>
                        <input
                            name={"achat[details][" + i +"][ingredient]"}
                            className="form-control col-md-3"
                            placeholder="Ingredient"
                            value={x.produit}
                            onChange={e => this.handleInputChange(e, i)}
                            />
                        <input
                            className="form-control ml10 col-md-3"
                            name={"achat[details][" + i +"][quantite]"}
                            placeholder="Quantité"
                            value={x.quantite}
                            onChange={e => this.handleInputChange(e, i)}
                        />
                        <input
                            className="form-control ml10 col-md-3"
                            name={"achat[details][" + i +"][prixUnitaire]"}
                            placeholder="Prix Unitaire"
                            value={x.prix}
                            onChange={e => this.handleInputChange(e, i)}
                        />
                        <div className="btn-box col-md-3">
                            {this.state.inputList.length !== 1 && <button
                        className="mr10 btn btn-danger"
                        onClick={() => this.handleRemoveClick(i)}>Remove</button>}
                        {this.state.inputList.length - 1 === i && <button className="btn btn-success" onClick={this.handleAddClick}>Add</button>}
                        </div>
                    </div>
                    );
                })
            }
                 </form>
            </div>
        );
    }
}

ReactDOM.render(
<IngredientList
/>,
    document.getElementById('details')
)