import { useState } from 'react';

export default function Navbar({ title }) {
	const [dropdownToggled, setDropdownToggled] = useState(false);
	return (
		<div className="top-0 left-0 right-0 m-0 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 dark:from-purple-800 dark:via-indigo-600 dark:to-blue-600 w-full h-auto py-4 flex items-center justify-between">
			<p className="font-bold text-white ml-4 text-xl">{title}</p>
			<div className="items-center md:flex hidden">
				<NavbarLink title="PGP/GPG" href="/pgp" />

				<NavbarLink title="Home" href="/" />
				<img
					src={
						'https://www.gravatar.com/avatar/1615be3776f4bdfa985afdea244eb1b3'
					}
					className="w-10 h-10 rounded-full ml-4 mr-4 shadow"
				/>
			</div>
			<div className="md:hidden">
				<button
					type="button"
					onClick={() => {
						setDropdownToggled(!dropdownToggled);
					}}
				>
					<div className="flex items-center pl-4  text-white">
						<p style={{ fontSize: '13px', fontWeight: 'bold' }}>Menu</p>
						<svg
							class="-mr-1 ml-2 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
						<img
							src={
								'https://www.gravatar.com/avatar/1615be3776f4bdfa985afdea244eb1b3'
							}
							className="w-10 h-10 rounded-full ml-4 mr-4 shadow"
						/>
					</div>
				</button>
				<div
					class={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-dark-tertiary ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-900 mr-4 ${
						dropdownToggled
							? 'transition ease-out duration-100 transform opacity-100 scale-100'
							: 'transition ease-in duration-75 transform opacity-0 scale-0'
					}`}
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="options-menu"
				>
					<div class="py-1">
						<a
							href="/"
							class="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-secondary hover:text-gray-900 dark:hover:text-gray-100"
							role="menuitem"
						>
							Home
						</a>
						<a
							href="/pgp"
							class="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-secondary hover:text-gray-900 dark:hover:text-gray-100"
							role="menuitem"
						>
							PGP/GPG
						</a>
					</div>
					<div class="py-1">
						<a
							href="/privacy"
							class="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-secondary hover:text-gray-900 dark:hover:text-gray-100"
							role="menuitem"
						>
							Privacy
						</a>
						<a
							href="/legal"
							class="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-secondary hover:text-gray-900 dark:hover:text-gray-100"
							role="menuitem"
						>
							Legal Disclosure
						</a>
						<a
							href="https://git.abmgrt.dev/exc_bad_access/abmgrt.dev"
							class="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-secondary hover:text-gray-900 dark:hover:text-gray-100"
							role="menuitem"
						>
							Source Code
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function NavbarLink({ title, href }) {
	return (
		<a href={href} className="ml-4 text-white underline">
			{title}
		</a>
	);
}
//bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600
