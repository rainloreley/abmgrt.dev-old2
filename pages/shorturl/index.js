import Page from '../../components/Page';

export default function ShortURLIndex() {
	return (
		<Page title="go.abmgrt.dev">
			<div className="m-4">
				<p className="font-bold text-3xl">go.abmgrt.dev</p>
				<p className="font-semibold mt-2">
					Hi! If you see this, there's a good chance you tried to access{' '}
					<a
						href="https://go.abmgrt.dev/hbVgep"
						className="underline text-blue-500"
						target="_blank"
					>
						go.abmgrt.dev
					</a>
				</p>
				<p className="my-2 text-gray-500 italic text-sm">
					I'm not saying that this is what happened, but why would you guess
					this url, right?
				</p>
				<p className="my-2">
					I'm using{' '}
					<a
						href="https://short.io"
						className="underline text-blue-500"
						target="_blank"
					>
						short.io
					</a>{' '}
					for this, so if you need their Privacy Policy, it's{' '}
					<a
						href="https://short.io/privacy"
						className="underline text-blue-500"
						target="_blank"
					>
						here
					</a>
					.
				</p>
				<p className="mb-4">
					Well, there's nothing here.{' '}
					<a href="/" className="underline text-blue-500">
						Here's
					</a>{' '}
					my website. And{' '}
					<a
						href="/api/randomvideo"
						className="underline text-blue-500"
						target="_blank"
					>
						here's a random video
					</a>
					.
				</p>
			</div>
		</Page>
	);
}
