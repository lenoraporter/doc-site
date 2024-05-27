import React from "react";

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
	return (
		<button
			onClick={toggleDarkMode}
			className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
		>
			{isDarkMode ? "Light Mode" : "Dark Mode"}
		</button>
	);
};

export default DarkModeToggle;
