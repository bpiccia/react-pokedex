import "./App.css";
import pokemonDB from "./data/pokemon.db.json";
import { Component } from "react";

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
				<input
					className="search-box"
					type="search"
					placeholder="search pokémon"
					onChange={onSearchChange}
				></input>
				{filteredPokemon.map((pokemon) => {
					return (
						<div key={pokemon.id}>
							<h1>{pokemon.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
