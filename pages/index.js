import Head from 'next/head';
import Navbar from '../components/Navbar';
import Page from '../components/Page';

export default function Home() {
	return (
		<Page>
			<Navbar title="Home" />
			<div className="w-full flex flex-col items-center text-center justify-center mt-20 px-4">
				<p className="font-bold text-3xl">Hello there!</p>
				<p className="mt-2">
					This website is not done yet. Idk what to put here. While you're
					waiting, please enjoy this nyan cat video:
				</p>
				<iframe
					className="mt-4"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/QH2-TGUlwu4"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</Page>
	);
}
