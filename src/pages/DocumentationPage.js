import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import MarkdownRenderer from "../components/MarkdownRenderer";

const DocumentationPage = () => {
	const { slug } = useParams();
	const filePath = `${slug}.md`;

	return (
		<Layout>
			<Sidebar />
			<main className="flex-1 p-6 bg-white overflow-y-auto">
				<MarkdownRenderer filePath={filePath} />
			</main>
		</Layout>
	);
};

export default DocumentationPage;
