import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import MarkdownRenderer from "../components/MarkdownRenderer";
import EditOnGitHub from "../components/EditOnGitHub";

const DocumentationPage = () => {
	const { slug } = useParams();
	const filePath = `/docs/${slug}.md`;

	return (
		<Layout>
			<Sidebar />
			<main className="flex-1 p-6 bg-white overflow-y-auto">
				<MarkdownRenderer filePath={filePath} />
				<EditOnGitHub filePath={`docs/${slug}.md`} />
			</main>
		</Layout>
	);
};

export default DocumentationPage;
