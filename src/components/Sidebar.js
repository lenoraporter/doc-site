import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="w-64 bg-gray-800 text-white p-4">
			<h2 className="text-xl font-bold mb-4">Documentation</h2>
			<nav>
				<ul>
					<li>
						<Link to="/docs/changelog" className="hover:underline">
							Changelog
						</Link>
					</li>
					<li>
						<Link to="/docs/whats-new" className="hover:underline">
							What's New
						</Link>
					</li>
					<li>
						<Link to="/docs/how-to-contribute" className="hover:underline">
							How to Contribute
						</Link>
					</li>
					<li>
						<Link to="/docs/avatar" className="hover:underline">
							Avatar
						</Link>
					</li>
					<li>
						<Link to="/docs/buttons" className="hover:underline">
							Buttons
						</Link>
					</li>
					<li>
						<Link to="/docs/badge" className="hover:underline">
							Badge
						</Link>
					</li>
					<li>
						<Link to="/docs/card" className="hover:underline">
							Card
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
