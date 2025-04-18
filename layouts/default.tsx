import { Link } from "@heroui/link";

import { Head } from "./head";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<main className="container max-w-md mx-auto max-w-7xl px-6 flex-grow py-8">
				{children}
			</main>
		</div>
	);
}
