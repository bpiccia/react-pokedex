import "./App.css";
import pokemonDB from "./data/pokemon.db.json";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			pokemonArray: [],
			searchField: "",
		};
	}

	componentDidMount() {
		//here would be a fetch
		const filtered = pokemonDB.filter(
			(v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
		);
		this.setState(() => {
			return { pokemonArray: filtered };
		});
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLowerCase();
		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		const { pokemonArray, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredPokemon = pokemonArray.filter((pokemon) =>
			pokemon.slug.includes(searchField)
		);

		return (
			<div className="App">
				<SearchBox
					placeholder="search pokemon"
					className="pokemon-search-box"
					onChangeHandler={onSearchChange}
				/>
				<CardList pokemonArray={filteredPokemon} />
			</div>
		);
	}
}

export default App;
