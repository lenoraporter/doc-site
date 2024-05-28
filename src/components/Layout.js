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
				<div className="px-6">
					<svg
						width="32"
						height="32"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 90 90"
						tabindex="-1"
						class="DigitalOceanSmileyStyles__StyledSvg-sc-64ca7b97-4 fOCpep"
					>
						<circle
							cx="45"
							cy="45"
							r="36.25"
							fill="none"
							stroke="currentColor"
							stroke-width="17.5"
							stroke-dasharray="170.824100538945 56.941366846315"
							stroke-dashoffset="113.88273369263"
							class="DigitalOceanSmileyStyles__StyledCircle-sc-64ca7b97-0 GowsZ"
						></circle>
						<rect
							x="3.25"
							y="61.5"
							width="11"
							height="11"
							fill="currentColor"
							class="DigitalOceanSmileyStyles__StyledPixelSm-sc-64ca7b97-1 dMNrpE"
						></rect>
						<rect
							x="14.25"
							y="72.5"
							width="13.5"
							height="13.5"
							fill="currentColor"
							class="DigitalOceanSmileyStyles__StyledPixelMd-sc-64ca7b97-2 eZYiSP"
						></rect>
						<rect
							x="27.5"
							y="55.25"
							width="17.25"
							height="17.25"
							fill="currentColor"
							class="DigitalOceanSmileyStyles__StyledPixelLg-sc-64ca7b97-3 grYxqE"
						></rect>
					</svg>
				</div>
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
