import { visit } from "unist-util-visit";
import { LinkIcon } from "@heroicons/react/solid";
import React from "react";
import { renderToString } from "react-dom/server";

const remarkHeadingLinks = () => {
	return (tree) => {
		visit(tree, "heading", (node) => {
			const text = node.children.map((child) => child.value || "").join("");
			const id = text.toLowerCase().replace(/\s+/g, "-");

			const linkIconElement = (
				<a href={`#${id}`} aria-hidden="true" className="anchor-link">
					<LinkIcon
						className="ml-2 inline-block text-gray-500 hover:text-gray-700"
						width={16}
						height={16}
					/>
				</a>
			);

			node.children.push({
				type: "jsx",
				value: renderToString(linkIconElement),
			});

			node.data = {
				hProperties: { id },
			};
		});
	};
};

export default remarkHeadingLinks;
