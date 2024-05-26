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
			<main className="flex-1">
				<div class="border-b">
					<div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
						<Sidebar />
						<main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
							<div class="mx-auto w-full min-w-0">
								<EditOnGitHub filePath={`docs/${slug}.md`} />
								<MarkdownRenderer filePath={filePath} />
							</div>
						</main>
					</div>
				</div>
			</main>
			<footer class="py-6 md:px-8 md:py-0">
				<div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
					<p class="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
						<a
							href="https://twitter.com/shadcn"
							target="_blank"
							rel="noreferrer"
							class="font-medium underline underline-offset-4"
						>
							shadcn
						</a>
						.
						<a
							href="https://github.com/shadcn-ui/ui"
							target="_blank"
							rel="noreferrer"
							class="font-medium underline underline-offset-4"
						>
							GitHub
						</a>
						.
					</p>
				</div>
			</footer>
		</Layout>
	);
};

export default DocumentationPage;
