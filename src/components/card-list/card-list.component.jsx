import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
	render() {
		const { pokemonArray } = this.props;
		return (
			<div className="card-list">
				{pokemonArray.map((pokemon) => {
					return <Card pokemon={pokemon} />;
				})}
			</div>
		);
	}
}
export default CardList;
