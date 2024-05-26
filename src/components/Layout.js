import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="relative flex min-h-screen flex-col bg-background">
			{children}
		</div>
	);
};

export default Layout;
