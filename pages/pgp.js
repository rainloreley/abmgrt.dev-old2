import Navbar from '../components/Navbar';
import Page from '../components/Page';

export default function PGP() {
	return (
		<Page title="PGP">
			<div className="m-4">
				<p className="font-bold text-3xl">PGP public keys</p>
				<p className="font-semibold mt-2">
					If you contact me via email, please use my PGP public key to encrypt
					the contents of the email.
				</p>
				<p className="my-2 text-gray-500">
					Obviously you don't have to but it'd be nice because encryption is
					important
				</p>
				<p className="mb-4">
					My main email address is <b>adrian@abmgrt.dev</b>, so please use this
					if you try to contact me, thanks! ^^
				</p>
				<div>
					<PGPEntry
						email="adrian@abmgrt.dev"
						fingerprint="4E4A 4B09 5277 6E3A FF94 5500 B6CC 77BC 47B5 6030"
					/>
					<PGPEntry
						email="mail@lory.dev"
						fingerprint="C310 E494 34AF D204 201A 699B 4EC4 9027 135C 22CD"
					/>

					<PGPEntry
						email="adrianbaumgart132@gmail.com"
						fingerprint="C11C D01D 8454 EAB6 C129 C8C0 F007 100A A9FB E3EF"
					/>
					<p className="text-gray-500 mt-2">
						School email address not disclosed, please contact me to get the
						email address and PGP public key
					</p>
				</div>
			</div>
		</Page>
	);
}

function PGPEntry({ email, fingerprint }) {
	return (
		<div>
			<p>
				<b className="mr-1">{email}:</b>
				<a
					href={`https://dl.abmgrt.dev/pgp/${email}.asc`}
					target="_blank"
					className="underline text-blue-600 mr-1"
				>
					PGP public key
				</a>
			</p>
			<p className="text-gray-500 text-sm break-normal">
				Fingerprint: {fingerprint}
			</p>
		</div>
	);
}
