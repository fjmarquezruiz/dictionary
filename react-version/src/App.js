import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import MiComponente from './components/MiComponente';

function App() {

	const nombre = "Sam";
	const presentacion = <h2>Hola {nombre} </h2>;

	return (
		<div className="App">
			<section className="componentes">
				<MiComponente></MiComponente>
			</section>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				{presentacion}
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			
		</div>
	);
}

export default App;
