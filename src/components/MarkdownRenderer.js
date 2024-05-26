import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import EditOnGitHub from "./EditOnGitHub";

const MarkdownRenderer = ({ filePath }) => {
	const [content, setContent] = useState("");
	const [meta, setMeta] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(filePath);
			const text = await response.text();
			const { content, data } = matter(text);
			setContent(content);
			setMeta(data);
		};
		fetchData();
	}, [filePath]);

	return (
		<div className="prose prose-lg mx-auto p-4">
			<div className="flex  justify-between items-center mb-4">
				<div>
					<h1 className="mb-3 text-5xl font-extrabold">{meta.title}</h1>
					<p className="text-gray-700 mt-2 mb-2">{meta.description}</p>
				</div>
				<EditOnGitHub filePath={`docs/${filePath}`} />
			</div>
			<hr className="mb-16 mt-2" />
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	);
};

export default MarkdownRenderer;
