import Page from '../../components/Page';
import { useRouter } from 'next/router';

export default function ShortURLError() {
	const router = useRouter();
	return (
		<Page title="go.abmgrt.dev">
			<div className="m-4">
				<p className="font-bold text-3xl">Oh no!</p>
				<p className="font-semibold mt-2">
					It seems like you tried to access {'"'}
					{router.query.url ?? '(something went very wrong)'}
					{'"'} but that didn't work? Why? Well, it doesn't exist!
				</p>
				<p className="my-2">
					If you think this is an error, you can contact me{' '}
					<a
						href="mailto:adrian@abmgrt.dev"
						className="underline text-blue-500"
					>
						here
					</a>
					.
				</p>
				<p className="mb-4">
					Otherwise,{' '}
					<a href="/" className="underline text-blue-500">
						here's
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
				<p>Have a nice day! ^^</p>
			</div>
		</Page>
	);
}
