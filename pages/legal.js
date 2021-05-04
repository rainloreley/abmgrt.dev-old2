import Navbar from '../components/Navbar';
import Page from '../components/Page';

export default function Legal() {
	return (
		<Page title="Legal Disclosure">
			<div className="m-4">
				<h1 className="font-bold text-3xl">Legal Disclosure</h1>
				<p className="text-gray-500 mt-2">
					Required by German Law. Please don't abuse this information, thank you
					^^
				</p>
				<p className="text-gray-500 mt-2">
					If you actually need to contact me, please use{' '}
					<a href="/pgp" className="underline italic">
						email
					</a>{' '}
					first
				</p>
				<p className="my-2">-------------</p>
				<p className="my-2 font-bold text-lg">
					Information in accordance with Section 5 TMG
				</p>
				<div className="my-4">
					<p>Adrian Baumgart</p>
					<p>Karl-Gehrig-Straße 2</p>
					<p>69226 Nussloch</p>
				</div>
				<div className="my-2">
					<h2 className="font-bold text-xl">Contact Information</h2>
					<p className="mt-2">
						Telephone:{' '}
						<a href="tel:+4915165909306" className="underline text-blue-600">
							+4915165909306
						</a>
					</p>
					<p>
						E-Mail:{' '}
						<a
							href="mailto:adrian@abmgrt.dev"
							target="_blank"
							className="underline text-blue-600"
						>
							adrian@abmgrt.dev
						</a>
					</p>
					<p>
						Internet address:{' '}
						<a
							href="https://abmgrt.dev"
							target="_blank"
							className="underline text-blue-600"
						>
							https://abmgrt.dev
						</a>
					</p>
				</div>
				<h2 className="mt-4 font-bold text-2xl">Disclaimer</h2>
				<p className="font-semibold text-xl mt-2">Accountability for content</p>
				<div className="mt-1">
					The contents of our pages have been created with the utmost care.
					However, we cannot guarantee the contents' accuracy, completeness or
					topicality. According to statutory provisions, we are furthermore
					responsible for our own content on these web pages. In this matter,
					please note that we are not obliged to monitor the transmitted or
					saved information of third parties, or investigate circumstances
					pointing to illegal activity. Our obligations to remove or block the
					use of information under generally applicable laws remain unaffected
					by this as per §§ 8 to 10 of the Telemedia Act (TMG).
				</div>
				<p className="font-semibold text-xl mt-2">Accountability for links</p>
				<div className="mt-1">
					Responsibility for the content of external links (to web pages of
					third parties) lies solely with the operators of the linked pages. No
					violations were evident to us at the time of linking. Should any legal
					infringement become known to us, we will remove the respective link
					immediately.
				</div>
				<p className="font-semibold text-xl mt-2">Copyright</p>
				<div className="mt-1">
					Our web pages and their contents are subject to German copyright law.
					Unless expressly permitted by law, every form of utilizing,
					reproducing or processing works subject to copyright protection on our
					web pages requires the prior consent of the respective owner of the
					rights. Individual reproductions of a work are only allowed for
					private use. The materials from these pages are copyrighted and any
					unauthorized use may violate copyright laws.
				</div>
				<div className="my-4">
					<i>Thanks to: </i>
					<a
						href="https://www.translate-24h.de"
						target="_blank"
						className="underline text-blue-600"
					>
						translate-24h.de English Translations
					</a>
				</div>
			</div>
		</Page>
	);
}
