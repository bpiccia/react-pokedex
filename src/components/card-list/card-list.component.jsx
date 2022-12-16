import { Component } from "react";

class CardList extends Component {
	render() {
		const { pokemonArray } = this.props;
		return (
			<div>
				{pokemonArray.map((pokemon) => (
					<h1 key={pokemon.id}>{pokemon.name}</h1>
				))}
			</div>
		);
	}
}
export default CardList;
