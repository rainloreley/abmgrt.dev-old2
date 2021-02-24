import Navbar from '../components/Navbar';
import Page from '../components/Page';

export default function Privacy() {
	return (
		<Page title="Privacy Policy">
			<div className="m-4">
				<h1 className="font-bold text-3xl">Never gonna give up your Privacy</h1>

				<p>-------</p>
				<p>
					<a
						href="https://www.youtube.com/watch?v=graKroRK8Hg"
						target="_blank"
						className="underline text-blue-600"
					>
						Listen to the instrumental here
					</a>
				</p>
				<p>-------</p>
				<p className="mb-2">
					<i>
						<u>Effective date: February 21, 2021</u>
					</i>
				</p>
				<PrivacyLine>We're no strangers to privacy</PrivacyLine>
				<PrivacyLine>You know your rights and so do I</PrivacyLine>
				<PrivacyLine>Transparency and trust is what I want</PrivacyLine>
				<PrivacyLine>You wouldn't get this from any other site</PrivacyLine>
				<PrivacyLine>I just wanna tell you what I'm doing</PrivacyLine>
				<PrivacyLine>Gotta make you understand</PrivacyLine>
				<PrivacyLine>Never gonna steal your data</PrivacyLine>
				<PrivacyLine>Never gonna sell it to Facebook</PrivacyLine>
				<PrivacyLine>Never gonna use data for something harmful</PrivacyLine>
				<PrivacyLine>Never gonna make you worried</PrivacyLine>
				<PrivacyLine>Never gonna break the law</PrivacyLine>
				<PrivacyLine>Never gonna tell a lie and hurt you</PrivacyLine>
				<PrivacyLine>We've known each other for so long</PrivacyLine>
				<PrivacyLine>We might collect data regarding your usage</PrivacyLine>
				<PrivacyLine>Of course this is all private</PrivacyLine>
				<PrivacyLine>Only Cloudflare and I can see it</PrivacyLine>
				<PrivacyLine>And if you wanna see their privacy policy</PrivacyLine>
				<PrivacyLine>
					Here it is:{' '}
					<a
						href="https://www.cloudflare.com/privacypolicy/"
						target="_blank"
						className="underline text-blue-600"
					>
						https://www.cloudflare.com/privacypolicy/
					</a>
				</PrivacyLine>
				<PrivacyLine>Never gonna steal your data</PrivacyLine>
				<PrivacyLine>Never gonna sell it to Facebook</PrivacyLine>
				<PrivacyLine>Never gonna use data for something harmful</PrivacyLine>
				<PrivacyLine>Never gonna make you worried</PrivacyLine>
				<PrivacyLine>Never gonna break the law</PrivacyLine>
				<PrivacyLine>Never gonna tell a lie and hurt you</PrivacyLine>
				<PrivacyLine>Never gonna steal your data</PrivacyLine>
				<PrivacyLine>Never gonna sell it to Facebook</PrivacyLine>
				<PrivacyLine>Never gonna use data for something harmful</PrivacyLine>
				<PrivacyLine>Never gonna make you worried</PrivacyLine>
				<PrivacyLine>Never gonna break the law</PrivacyLine>
				<PrivacyLine>Never gonna tell a lie and hurt you</PrivacyLine>
				<PrivacyLine>Never gonna steal, never gonna steal</PrivacyLine>
				<PrivacyLine>(Your data)</PrivacyLine>
				<PrivacyLine>(Ooh) Never gonna steal, never gonna steal</PrivacyLine>
				<PrivacyLine>(Your data)</PrivacyLine>
				<PrivacyLine>We've known each other for so long</PrivacyLine>
				<PrivacyLine>We really want you to feel safe here</PrivacyLine>
				<PrivacyLine>
					And if you wonder you can check the source code{' '}
					<a
						href="https://git.abmgrt.dev/exc_bad_access/abmgrt.dev"
						target="_blank"
						className="underline text-blue-600"
					>
						here
					</a>
				</PrivacyLine>
				<PrivacyLine>If you're a nerd you can read this</PrivacyLine>
				<PrivacyLine>I just wanna tell you what I'm doing</PrivacyLine>
				<PrivacyLine>Gotta make you understand</PrivacyLine>
				<PrivacyLine>Never gonna steal your data</PrivacyLine>
				<PrivacyLine>Never gonna sell it to Facebook</PrivacyLine>
				<PrivacyLine>Never gonna use data for something harmful</PrivacyLine>
				<PrivacyLine>Never gonna make you worried</PrivacyLine>
				<PrivacyLine>Never gonna break the law</PrivacyLine>
				<PrivacyLine>Never gonna tell a lie and hurt you</PrivacyLine>
				<PrivacyLine>Never gonna steal your data</PrivacyLine>
				<PrivacyLine>Never gonna sell it to Facebook</PrivacyLine>
				<PrivacyLine>Never gonna use data for something harmful</PrivacyLine>
				<PrivacyLine>Never gonna make you worried</PrivacyLine>
				<PrivacyLine>Never gonna break the law</PrivacyLine>
				<PrivacyLine>Never gonna tell a lie and hurt you</PrivacyLine>

				<PrivacyLine>Never gonna give you my data</PrivacyLine>
				<PrivacyLine>But just in case, here it is:</PrivacyLine>
				<PrivacyLine>Never gonna call me at</PrivacyLine>
				<PrivacyLine>
					<a href="tel:+4915165909306" className="underline text-blue-600">
						+4915165909306
					</a>
				</PrivacyLine>
				<PrivacyLine>Never gonna send me an email</PrivacyLine>
				<PrivacyLine>But I will reply</PrivacyLine>
				<PrivacyLine>
					Send it to{' '}
					<a
						href="mailto:adrian@abmgrt.dev"
						className="underline text-blue-600"
					>
						adrian@abmgrt.dev
					</a>
				</PrivacyLine>
				<PrivacyLine>And that's it!</PrivacyLine>
			</div>
		</Page>
	);
}

function PrivacyLine({ children }) {
	return <p className="m-1">{children}</p>;
}
