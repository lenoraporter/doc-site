import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="w-64 bg-gray-800 text-white p-4">
			<nav>
				<ul>
					<li>
						<NavLink
							to="/docs/changelog"
							className="block py-2 px-3 hover:bg-gray-700 rounded"
						>
							Changelog
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/docs/whats-new"
							className="block py-2 px-3 hover:bg-gray-700 rounded"
						>
							What's New
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/docs/how-to-contribute"
							className="block py-2 px-3 hover:bg-gray-700 rounded"
						>
							How to Contribute
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/docs/avatar"
							className="block py-2 px-3 hover:bg-gray-700 rounded"
						>
							Avatar
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/docs/buttons"
							className="block py-2 px-3 hover:bg-gray-700 rounded"
						>
							Buttons
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/docs/badge"
							className="block py-2 px-3 hover:bg-gray-700 rounded"
						>
							Badge
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/docs/card"
							className="block py-2 px-3 hover:bg-gray-700 rounded"
						>
							Card
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
