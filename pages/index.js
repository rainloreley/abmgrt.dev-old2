import { GitHub, Instagram, Mail, Twitter } from 'react-feather';
import Page from '../components/Page';

export default function Home() {
	return (
		<Page title="Home">
			<div className="m-2">
				<img src="/nyancat.png" width={70} />
			</div>
			<div className="w-full flex flex-col mt-6 px-4">
				<div className="flex items-center flex-col w-full justify-center my-4">
					<h2 className="font-semibold text-lg">Hello! I am</h2>
					<h1 className="font-bold text-3xl">Adrian Baumgart</h1>
					<p className="text-gray-500 italic text-md">they/she/he</p>

					<h2 className="text-xl font-semibold">... and I code stuff</h2>
					<p className="text-gray-500 italic text-sm">
						also known as: rainloreley, loreley
					</p>
					<div className="flex mt-3">
						<a
							href="https://polywork.com/loreley"
							target={'_blank'}
							rel="noreferrer"
							className="mx-2"
						>
							<img src="/svg/polywork-rubix-icon-color.svg" width={20} />
						</a>
						<a
							href="https://matrix.to/#/@rainloreley:matrix.lory.dev"
							target={'_blank'}
							rel="noreferrer"
							className="mx-2 w-5"
						>
							<svg viewBox="0 0 27.9 32" fill="currentColor">
								<path d="m27.1 31.2v-30.5h-2.19v-0.732h3.04v32h-3.04v-0.732z" />
								<path d="m8.23 10.4v1.54h0.044c0.385-0.564 0.893-1.03 1.49-1.37 0.58-0.323 1.25-0.485 1.99-0.485 0.72 0 1.38 0.14 1.97 0.42 0.595 0.279 1.05 0.771 1.36 1.48 0.338-0.5 0.796-0.941 1.38-1.32 0.58-0.383 1.27-0.574 2.06-0.574 0.602 0 1.16 0.074 1.67 0.22 0.514 0.148 0.954 0.383 1.32 0.707 0.366 0.323 0.653 0.746 0.859 1.27 0.205 0.522 0.308 1.15 0.308 1.89v7.63h-3.13v-6.46c0-0.383-0.015-0.743-0.044-1.08-0.0209-0.307-0.103-0.607-0.242-0.882-0.133-0.251-0.336-0.458-0.584-0.596-0.257-0.146-0.606-0.22-1.05-0.22-0.44 0-0.796 0.085-1.07 0.253-0.272 0.17-0.485 0.39-0.639 0.662-0.159 0.287-0.264 0.602-0.308 0.927-0.052 0.347-0.078 0.697-0.078 1.05v6.35h-3.13v-6.4c0-0.338-7e-3 -0.673-0.021-1-0.0114-0.314-0.0749-0.623-0.188-0.916-0.108-0.277-0.3-0.512-0.55-0.673-0.258-0.168-0.636-0.253-1.14-0.253-0.198 0.0083-0.394 0.042-0.584 0.1-0.258 0.0745-0.498 0.202-0.705 0.374-0.228 0.184-0.422 0.449-0.584 0.794-0.161 0.346-0.242 0.798-0.242 1.36v6.62h-3.13v-11.4z" />
								<path d="m0.936 0.732v30.5h2.19v0.732h-3.04v-32h3.03v0.732z" />
							</svg>
						</a>
						<a href="/pgp" className="mx-2">
							<Mail size={20} />
						</a>
						<a
							href="https://twitter.com/rainloreley"
							target={'_blank'}
							rel="noreferrer"
							className="mx-2"
						>
							<Twitter size={20} color="#1DA1F2" />
						</a>
						<a
							href="https://instagram.com/rainloreley"
							target={'_blank'}
							rel="noreferrer"
							className="mx-2"
						>
							<Instagram size={20} color="#bc2a8d" />
						</a>
						<a
							href="https://github.com/rainloreley"
							target={'_blank'}
							rel="noreferrer"
							className="mx-2"
						>
							<GitHub size={20} />
						</a>
					</div>
				</div>
				<div className="mt-6">
					<p className="text-2xl font-semibold">What do I do</p>
					<div className="mx-2">
						<p>
							When I'm motivated, I code. Mostly in Swift and
							Javascript/Typescript.
						</p>
						<p className="text-sm text-gray-400 dark:text-gray-500 italic">
							When not, I sit there and listen to the beautiful sounds of the
							Dell PowerEdge R710 server sitting right next to me :P
						</p>
						<p>
							I'm interested in mobile and web development, but sometimes I
							destroy backend databases or Linux systems as well (heh :D)
						</p>
						<p className="mt-2 italic text-sm text-gray-800 dark:text-gray-200">
							You can probably find more information on my{' '}
							<a
								href="https://polywork.com/loreley"
								target={'_blank'}
								rel="noreferrer"
								className="underline text-blue-500"
							>
								Polywork profile
							</a>{' '}
							lol
						</p>
					</div>
				</div>
				<div className="mt-6">
					<p className="text-2xl font-semibold">Projects</p>
					<div className="mx-2">
						<p className="mt-2">
							Here are some of the projects I worked on. Most of them are
							probably bad, but you can check out everything on{' '}
							<a
								href="https://github.com/rainloreley"
								target="_blank"
								className="underline text-blue-500"
							>
								GitHub
							</a>
						</p>
						<div className="grid lg:grid-cols-3 gap-6 justify-center mt-4 ml-4 md:grid-cols-2 grid-cols-1">
							<ProjectCard
								name="Lyra"
								description="Open source DMX control software (WIP)"
								license="MIT"
								isDiscontinued={false}
								isOpensource={true}
								codeurl="https://github.com/rainloreley/lyra"
							/>
							<ProjectCard
								name="random edupage app"
								description="an attempt to build a better Edupage app (WIP)"
								license="MIT"
								isDiscontinued={false}
								isOpensource={true}
								codeurl="https://github.com/rainloreley/edupage-app"
							/>
							<ProjectCard
								name="Aurora"
								description="An unofficial iOS app to manage Hetzner Cloud servers"
								license="MIT"
								isDiscontinued={false}
								isOpensource={true}
								codeurl="https://github.com/rainloreley/aurora"
							/>
							<ProjectCard
								name="Spica"
								description="A mobile client for Alles Micro"
								license="MIT"
								isDiscontinued={true}
								isOpensource={true}
							/>
							<ProjectCard
								name="KlassenApp"
								isDiscontinued={true}
								isOpensource={true}
								license="MIT"
								description="An app made by a friend and me for our class with homework, tests,..."
								codeurl="https://github.com/rainloreley/klassenapp"
							/>

							<ProjectCard
								name="DSMCloudflareDDNS"
								description="Simple http API for DSM (Synology DiskStation Manager) to use Cloudflare as a DDNS provider"
								isOpensource={true}
								license="MIT"
								codeurl="https://github.com/rainloreley/DSMCloudflareDDNS"
							/>

							<ProjectCard
								name="terminal-commands"
								description="A (small) collection of terminal scripts I made because I need them :)"
								isOpensource={true}
								license="MIT"
								codeurl="https://github.com/rainloreley/terminal-commands"
							/>

							<ProjectCard
								name="TennisBallTracker"
								description="An app (for school) that tracks a tennis ball and draws its flight path."
								isOpensource={true}
								license="MIT"
								codeurl="https://github.com/rainloreley/TennisBallTracker"
							/>

							<ProjectCard
								name="Videoscreen"
								description="an app that outputs the OBS virtual camera (idek)"
								isOpensource={true}
								license="WTFPL"
							/>
							<ProjectCard
								name="Appfall"
								description="An app some friends and I made during Jugend hackt 2018"
								isDiscontinued={true}
								isOpensource={true}
								license="MIT"
								url="https://appfall.github.io/"
								codeurl="https://github.com/rainloreley/appfall-ios"
							/>
							<ProjectCard
								name="Mira"
								description="A note-taking app for iPadOS"
								isDiscontinued={true}
								isOpensource={false}
							/>
						</div>
						<p className="mt-2 text-gray-500 text-sm ml-2 italic">
							(Discontinued: No support for a project that needs active support
							(online service, beta state,...))
						</p>
					</div>
				</div>
				<div className="mt-6">
					<p className="text-2xl font-semibold">Other stuff</p>
					<div className="mx-2">
						<p>
							Here's a list of other stuff I did (and I want to share here).
							Pretty empty yet...
						</p>
						<ul className="list-disc mx-6">
							<li>
								<a
									className="underline text-blue-500"
									href="https://www.notion.so/abmgrt/How-to-export-Google-Photos-and-keep-creation-date-EXIF-a0151ece085340b399740dc246ea7efc"
									target="_blank"
								>
									How to export Google Photos and keep creation date (EXIF)
								</a>
							</li>
							<li>
								<a
									className="underline text-blue-500"
									href="https://go.abmgrt.dev/gfs-2021-physik"
									target="_blank"
								>
									GFS 2-Dimensionale Bewegungen (2021 - german)
								</a>
							</li>
							<li>
								<a
									className="underline text-blue-500"
									href="https://go.abmgrt.dev/oop-2021-nwt"
									target="_blank"
								>
									Referat Objektorientierte Programmierung (2021 - german)
								</a>
							</li>
							<li>
								<a
									className="underline text-blue-500"
									href="https://go.abmgrt.dev/gfs-22-02-info"
									target={'_blank'}
								>
									GFS Digitale Bilder (2022 - german)
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-6 mb-10">
					<p className="text-2xl font-semibold">Contact</p>

					<div className="mx-2">
						<p>
							If you ever need to contact me (idk why), there are a few ways:
						</p>
						<ul className="list-disc mx-5">
							<li>
								<a
									href="https://matrix.to/#/@rainloreley:matrix.lory.dev"
									className="underline text-blue-500"
									target="_blank"
								>
									Matrix
								</a>
							</li>
							<li>
								<a>Discord: loreley#9301</a>
							</li>
							<li>
								<a href="/pgp" className="underline text-blue-500">
									Email
								</a>
							</li>
							<li>
								<a
									href="https://t.me/exc_bad_access"
									className="underline text-blue-500"
									target="_blank"
								>
									Telegram
								</a>
							</li>
							<li>
								<a
									href="https://threema.id/E8KVUJT3"
									className="underline text-blue-500"
									target="_blank"
								>
									Threema
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div
				className="bg-gray-50 dark:bg-dark-secondary flex flex-col content-between justify-between justify-center"
				style={{ height: '2000px' }}
			>
				<div />
				<div className="flex justify-center mb-10">
					<div>
						<iframe
							className="mt-4 md:w-96 md:h-56 w-3/4 bottom-0 self-end rounded-xl"
							src="https://www.youtube-nocookie.com/embed/AaEmCFiNqP0"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
						<p className="text-gray-500">{'Jazz <3'}</p>
					</div>
				</div>
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
		<div className="border rounded-2xl p-4 border-transparent shadow dark:bg-dark-secondary bg-gray-50">
			<div className="flex flex-col justify-center items-center text-center">
				<p className="font-bold text-xl">{name}</p>
				<div className="flex mt-3">
					{isOpensource == true ? (
						<div
							className={`border border-transparent bg-green-500 rounded-lg ${
								isDiscontinued ? 'mr-2' : ''
							}`}
						>
							<div className="p-1">
								<p className="text-sm text-white italic">
									Open-Source {license !== undefined ? `(${license})` : ''}
								</p>
							</div>
						</div>
					) : (
						<div></div>
					)}
					{isDiscontinued == true ? (
						<div className="border border-transparent bg-yellow-500 rounded-lg">
							<div className="p-1">
								<p className="text-sm text-white italic">Discontinued</p>
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
							className={`bg-blue-500 hover:bg-blue-600 rounded-xl p-2 px-4 text-white mt-2 ${
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
							className={`bg-blue-500 hover:bg-blue-600 rounded-xl p-2 px-4 text-white mt-2`}
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
