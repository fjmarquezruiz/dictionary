import React, { Component, Fragment } from 'react';

class MiComponente extends Component {
	render() {
		let receta = {
			nombre: 'Pizza',
			ingredientes: ['Tomate', 'Queso', 'Jamón cocido'],
			calorias: 400,
		};

		return (
			<Fragment>
				<h1>{`Receta: ${receta.nombre}`}</h1>
				<h2>{`Calorías: ${receta.calorias}`}</h2>
				<ol>
					{receta.ingredientes.map((ingrediente, i) => {
						return <li key={i}>{ingrediente}</li>;
					})}
				</ol>
			</Fragment>
		);
	}
}

export default MiComponente;
