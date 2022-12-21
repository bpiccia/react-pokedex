import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
	render() {
		const {
			id,
			name,
			number,
			ThumbnailAltTex: altText,
			ThumbnailImage: image,
			type: types,
		} = this.props.pokemon;
		return (
			<div key={id} className="card-container">
				<h3 className="card-number">{`#${number}`}</h3>
				<img className="pokemon-thumbnail" alt={altText} src={image} />
				<h2> {name} </h2>
				{types.map((type) => (
					<img
						className="pokemon-type"
						alt={`${type}-type`}
						src={`/pokemon-types/${type}.ico`}
						title={`${type}-type`}
					></img>
				))}
			</div>
		);
	}
}

export default Card;
