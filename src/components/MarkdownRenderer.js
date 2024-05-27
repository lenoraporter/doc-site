import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import matter from "gray-matter";
import PageHead from "./PageHead";

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
				rehypePlugins={[
					rehypeSlug,
					[
						rehypeAutolinkHeadings,
						{
							behavior: "append",
							properties: { className: "anchor" },
							content: () => (
								<div className="ml-2 inline-block text-gray-500 hover:text-gray-700" />
							),
						},
					],
				]}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
};

export default MarkdownRenderer;
