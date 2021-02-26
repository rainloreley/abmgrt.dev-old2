import Page from '../components/Page';

export default function Home() {
	return (
		<Page title="Home">
			<div className="w-full flex flex-col mt-12 px-4">
				<div className="flex flex-row justify-between items-center mb-2">
					<p className="font-bold text-3xl">Hello there!</p>
					<img
						src={
							'https://www.gravatar.com/avatar/1615be3776f4bdfa985afdea244eb1b3'
						}
						className="w-12 h-12 rounded-full ml-4 mr-4 shadow"
					/>
				</div>
				<p className="mt-2">Welcome to my website! Here's a cookie: 🍪</p>
				<div className="mt-6">
					<p className="text-2xl font-semibold">$ whoami</p>
					<div className="mx-2">
						<p className="mt-2">
							Idk, who am I? Most people know me as "Adrian", so I guess you can
							call me that.
						</p>
						<p className="mt-2">
							When I'm motivated, I do some coding stuff. Mostly mobile app
							development (for iOS, <i>sometimes</i> for Android) and web
							development
						</p>
						<p className="mt-2">
							There are some programming languages I know such as Swift,
							JavaScript, TypeScript, Dart and a bit of Kotlin and C++
						</p>
					</div>
				</div>
				<div className="mt-6">
					<p className="text-2xl font-semibold">Projects</p>
					<div className="mx-2">
						<p className="mt-2">
							Here are some of my projects I worked on. I'm not saying they're
							any good, but I'll list them here anyways
						</p>
						<div className="grid lg:grid-cols-3 gap-6 justify-center mt-4 ml-4 md:grid-cols-2 grid-cols-1">
							<ProjectCard
								name="Spica"
								description="A mobile client for Alles Micro"
								license="MIT"
								isDiscontinued={true}
								isOpensource={true}
								url="https://spica.li"
							/>
							<ProjectCard
								name="KlassenApp"
								isDiscontinued={true}
								isOpensource={true}
								license="MIT"
								description="An app made by a friend and me for our class with homework, tests,..."
								codeurl="https://git.abmgrt.dev/exc_bad_access/klassenapp"
							/>

							<ProjectCard
								name="DSMCloudflareDDNS"
								description="Simple http API for DSM (Synology DiskStation Manager) to use Cloudflare as a DDNS provider"
								isOpensource={true}
								license="MIT"
								codeurl="https://git.abmgrt.dev/exc_bad_access/DSMCloudflareDDNS"
							/>

							<ProjectCard
								name="TennisBallTracker"
								description="An app (for school) that tracks a tennis ball and draws that path it's flying on"
								isDiscontinued={true}
								isOpensource={true}
								license="MIT"
								codeurl="https://git.abmgrt.dev/exc_bad_access/TennisBallTracker"
							/>

							<ProjectCard
								name="Videoscreen"
								description="an app that outputs the OBS virtual camera (idek)"
								isDiscontinued={true}
								isOpensource={true}
								license="WTFPL"
								codeurl="https://git.abmgrt.dev/exc_bad_access/Videoscreen"
							/>
							<ProjectCard
								name="Appfall"
								description="An app some friends and I made during Jugend hackt 2018"
								isDiscontinued={true}
								isOpensource={true}
								license="MIT"
								url="https://appfall.github.io/"
								codeurl="https://git.abmgrt.dev/exc_bad_access/appfall-ios"
							/>
							<ProjectCard
								name="Mira"
								description="A note-taking app for iPadOS"
								isDiscontinued={true}
								isOpensource={false}
							/>
						</div>
						<p className="mt-4 ml-2">
							... and even more. All of my projects (that are open-source) are
							available{' '}
							<a
								href="https://git.abmgrt.dev/exc_bad_access"
								target="_blank"
								className="underline text-blue-500"
							>
								here
							</a>
						</p>
						<p className="mt-2 text-gray-500 text-sm ml-2">
							(Almost all of them discontinued but I'm working on something I
							haven't announced yet ;) )
						</p>
					</div>
				</div>
				<div className="mt-6">
					<p className="text-2xl font-semibold">Other stuff</p>
					<div className="mx-2">
						<p>Here's a list of other stuff I did. Pretty empty yet...</p>
						<ul className="list-decimal	mx-6">
							<li>
								<a
									className="underline text-blue-500"
									href="https://www.notion.so/abmgrt/How-to-export-Google-Photos-and-keep-creation-date-EXIF-a0151ece085340b399740dc246ea7efc"
									target="_blank"
								>
									How to export Google Photos and keep creation date (EXIF)
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-6 mb-10">
					<p className="text-2xl font-semibold">Contact</p>
					<div className="mx-2">
						<p>
							My email address including the PGP public key are available{' '}
							<a href="/pgp" className="underline text-blue-500">
								here
							</a>
						</p>
					</div>
				</div>
			</div>
			<div
				className="bg-gray-100 dark:bg-dark-secondary flex justify-center"
				style={{ height: '2000px' }}
			>
				<iframe
					className="mt-4 md:w-96 md:h-56 w-3/4 bottom-0 self-end rounded-xl mb-10"
					src="https://www.youtube-nocookie.com/embed/QH2-TGUlwu4"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>{' '}
		</Page>
	);
}

function ProjectCard({
	name,
	description,
	isDiscontinued,
	isOpensource,
	license,
	url,
	codeurl,
}) {
	return (
		<div className="border border-gray-400 rounded-xl p-3">
			<div className="flex flex-col justify-center items-center text-center">
				<p className="font-bold text-xl">{name}</p>
				<div className="flex mt-3">
					{isOpensource == true ? (
						<div
							className={`border border-green-600 rounded ${
								isDiscontinued ? 'mr-2' : ''
							}`}
						>
							<div className="p-1">
								<p className="text-sm text-green-600 italic">
									Open-Source {license !== undefined ? `(${license})` : ''}
								</p>
							</div>
						</div>
					) : (
						<div></div>
					)}
					{isDiscontinued == true ? (
						<div className="border border-yellow-600 rounded">
							<div className="p-1">
								<p className="text-sm text-yellow-600 italic">Discontinued</p>
							</div>
						</div>
					) : (
						<div></div>
					)}
				</div>
				<p className="mt-2 break-words w-full">{description}</p>
				<div className="flex mt-3">
					{url !== undefined ? (
						<a
							href={url}
							className={`bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 rounded-md p-2 text-white mt-2 ${
								codeurl !== undefined ? 'mr-2' : ''
							}`}
							target="_blank"
						>
							Website
						</a>
					) : (
						<div></div>
					)}
					{codeurl !== undefined ? (
						<a
							href={codeurl}
							className={`bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 rounded-md p-2 text-white mt-2`}
							target="_blank"
						>
							Code
						</a>
					) : (
						<div></div>
					)}
				</div>
			</div>
		</div>
	);
}
/*
<p className="mt-2">
					This website is not done yet. Idk what to put here. While you're
					waiting, please enjoy this nyan cat video:
				</p>
				<iframe
					className="mt-4 md:w-96 md:h-56 w-3/4"
					src="https://www.youtube-nocookie.com/embed/QH2-TGUlwu4"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
*/
