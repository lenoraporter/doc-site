import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

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
			{/* <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
				{meta.title}
			</h1>
			<p className="text-gray-700">{meta.description}</p> */}
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	);
};

export default MarkdownRenderer;
