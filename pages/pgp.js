import Navbar from '../components/Navbar';
import Page from '../components/Page';

export default function PGP() {
	return (
		<Page>
			<Navbar title="PGP" />
			<div className="m-4">
				<p className="font-bold text-3xl">PGP Public keys</p>
				<p className="font-semibold mt-2">
					If you contact me via email, please use my PGP public key to encrypt
					the content of the email.
				</p>
				<p className="my-2 text-gray-600">
					Obviously you don't have to but it'd be nice because encryption is
					important
				</p>
				<p className="mb-4">
					My main email address is <b>adrian@abmgrt.dev</b>, so please use this
					if you try to contact me, thanks! ^^
				</p>
				<div>
					<PGPEntry email="adrian@abmgrt.dev" />
					<PGPEntry email="adrianbaumgart132@gmail.com" />
					<p className="text-gray-700 mt-2">
						School email address Not disclosed, please contact me to get the
						email address and PGP public key
					</p>
				</div>
			</div>
		</Page>
	);
}

function PGPEntry({ email }) {
	return (
		<div>
			<p>
				<b>{email}:</b>{' '}
				<a
					href={`https://dl.abmgrt.dev/pgp/${email}.asc`}
					target="_blank"
					className="underline text-blue-600"
				>
					PGP public key
				</a>
			</p>
		</div>
	);
}
