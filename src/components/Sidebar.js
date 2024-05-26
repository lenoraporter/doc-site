import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="bg-gray-800 text-white p-4 fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
			<h2 className="text-xl font-bold mb-4">Documentation</h2>
			<nav class="relative overflow-hidden h-full py-6 pr-6 lg:py-8">
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
