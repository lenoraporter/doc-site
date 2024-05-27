import React, { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Layout = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className={`min-h-screen flex flex-col ${isDarkMode ? "dark" : ""}`}>
			<header className="bg-gray-900 text-white p-4 flex justify-between items-center">
				<h1 className="text-3xl">My Documentation Site</h1>
				<DarkModeToggle
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>
			</header>
			<main className="flex flex-1 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
				{children}
			</main>
		</div>
	);
};

export default Layout;
