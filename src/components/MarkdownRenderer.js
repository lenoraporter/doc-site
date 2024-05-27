import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import matter from "gray-matter";
import PageHead from "./PageHead";
import { H1, H2, H3, H4, H5, H6 } from "./CustomHeading";

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

	const editUrl = `https://github.com/lenoraporter/docs-site/edit/master/public/docs/${filePath}`;

	return (
		<div className="prose prose-lg mx-auto p-4">
			<PageHead
				title={meta.title}
				description={meta.description}
				editUrl={editUrl}
			/>
			<hr className="mb-6" />
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeSlug]}
				components={{
					h1: H1,
					h2: H2,
					h3: H3,
					h4: H4,
					h5: H5,
					h6: H6,
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
};

export default MarkdownRenderer;
