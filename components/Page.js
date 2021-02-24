import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/Page.module.css';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Page({ title, children }) {
	useEffect(() => {
		console.log('hi');
		const appHeight = () => {
			const doc = document.documentElement;
			doc.style.setProperty('--app-height', `${window.innerHeight}px`);
		};
		window.addEventListener('resize', appHeight);
		appHeight();
	}, []);
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className={styles.frame}>
				<Navbar title={title} />
				<div className="pb-16">{children}</div>
				<Footer />
			</div>
		</>
	);
}
