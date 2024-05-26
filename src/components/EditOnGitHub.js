import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const EditOnGitHub = ({ filePath }) => {
	const repoUrl =
		"https://github.com/lenoraporter/docs-site/edit/master/public/";
	const editUrl = `${repoUrl}/${filePath}`;

	return (
		<div className="flex justify-end mb-4">
			<a
				href={editUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center text-blue-600 hover:underline"
			>
				<FaPencilAlt className="mr-2" />
				Edit on GitHub
			</a>
		</div>
	);
};

export default EditOnGitHub;
