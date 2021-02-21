export default function Page({ children }) {
	return (
		<div className="dark:bg-dark-primary w-full h-full min-h-screen mx-auto dark:text-white">
			{children}
		</div>
	);
}
