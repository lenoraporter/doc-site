import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-gray-900 text-white p-4">
				<h1 className="text-3xl">My Documentation Site</h1>
			</header>
			<div className="flex flex-1">{children}</div>
		</div>
	);
};

export default Layout;
