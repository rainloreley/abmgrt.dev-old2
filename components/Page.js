import Navbar from './Navbar';
import Footer from './Footer';

export default function Page({ title, children }) {
	return (
		<div className="dark:bg-dark-primary w-full h-full min-h-screen mx-auto dark:text-white relative">
			<Navbar title={title} />
			<div className="pb-16">{children}</div>
			<Footer />
		</div>
	);
}
