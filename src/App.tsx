import { Alert, Container, Row } from "react-bootstrap";
import "./App.css";
import { NavigationPanel } from "./NavigationPanel";
import { BrowserRouter as Router } from "react-router-dom";
import { TopPanel } from "./TopPanel";

export const App = () => {
	return (
		<div className="App">
			<body>
				<header className="bg-dark">
					<TopPanel />
				</header>
				<main>
					<div className="m-2 justify-content-center">



					</div>
				</main>
				<footer>
					<p>
						<Alert key={"dark"} variant={"dark"}>
							<a href="http://spsu.ru/">ПГУ им. Т. Г. Шевченко</a>
							<br />
							Copyright ©
						</Alert>
					</p>
				</footer>
			</body>
		</div>
	);
};
