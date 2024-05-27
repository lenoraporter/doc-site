import React from "react";
import { LinkIcon } from "@heroicons/react/solid";

const CustomHeading = ({ level, children }) => {
	const text = React.Children.toArray(children).reduce((text, child) => {
		return typeof child === "string" ? text + child : text;
	}, "");
	const id = text.toLowerCase().replace(/\s+/g, "-");

	const Tag = `h${level}`;

	return (
		<Tag id={id} className="group">
			{children}
			<a
				href={`#${id}`}
				aria-hidden="true"
				className="anchor-link ml-2 opacity-0 group-hover:opacity-100"
			>
				<LinkIcon
					className="inline-block text-gray-500 hover:text-gray-700"
					width={24}
					height={24}
				/>
			</a>
		</Tag>
	);
};

export const H1 = (props) => <CustomHeading level={1} {...props} />;
export const H2 = (props) => <CustomHeading level={2} {...props} />;
export const H3 = (props) => <CustomHeading level={3} {...props} />;
export const H4 = (props) => <CustomHeading level={4} {...props} />;
export const H5 = (props) => <CustomHeading level={5} {...props} />;
export const H6 = (props) => <CustomHeading level={6} {...props} />;
