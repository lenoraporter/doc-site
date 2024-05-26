import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import DocumentationPage from "./pages/DocumentationPage";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/docs/:slug" element={<DocumentationPage />} />
				<Route path="/" element={<Navigate to="/docs/changelog" />} />
			</Routes>
		</Router>
	);
};

export default App;
