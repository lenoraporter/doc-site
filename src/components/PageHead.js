import React from "react";
import { PencilIcon } from "@heroicons/react/solid";

const PageHead = ({ title, description, editUrl }) => {
	return (
		<div className="lg:flex lg:items-center lg:justify-between mb-4">
			<div className="min-w-0 flex-1">
				<h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
					{title}
				</h1>
				{description && (
					<p className="text-gray-700 mt-2 mb-2">{description}</p>
				)}
			</div>
			<div className="mt-5 flex lg:ml-4 lg:mt-0">
				<span className="hidden sm:block">
					<a
						href={editUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						<PencilIcon
							className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
						Edit on GitHub
					</a>
				</span>
			</div>
		</div>
	);
};

export default PageHead;
