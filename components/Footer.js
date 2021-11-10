import { useState } from 'react';
import FeatherIcon from './icons/FeatherIcon';
import GlobeIcon from './icons/GlobeIcon';
import HeartIcon from './icons/HeartIcon';
import MoonIcon from './icons/MoonIcon';
import RainbowFlagIcon from './icons/RainbowFlagIcon';
import SettingsIcon from './icons/SettingsIcon';
import TransFlagIcon from './icons/TransFlagIcon';
import TVIcon from './icons/TVIcon';

export default function Footer() {
	const [clickCooldown, setClickCooldown] = useState(3);
	const [clickCounter, setClickCounter] = useState(0);

	function increaseCounter() {
		if (clickCooldown == 0) {
			if (clickCounter < 8) {
				setClickCounter(clickCounter + 1);
			}
		} else {
			setClickCooldown(clickCooldown - 1);
		}
	}

	return (
		<div className="bottom-0 m-0 absolute w-full h-16 bg-gray-100 dark:bg-dark-tertiary justify-between flex items-center pl-4 rounded-t-xl shadow-xl">
			<a onClick={increaseCounter}>
				<FooterEasterEggRenderer count={clickCounter} />
			</a>
			<div className="md:hidden">
				<a
					className="underline mr-4 text-gray-700 dark:text-gray-400"
					href="/legal"
				>
					Legal Disclosure
				</a>
			</div>
			<div className="items-end md:block hidden">
				<a
					className="underline mr-3 text-gray-700 dark:text-gray-400"
					href="https://github.com/rainloreley/abmgrt.dev"
					target="_blank"
				>
					Source Code
				</a>
				<a
					className="underline mr-3 text-gray-700 dark:text-gray-400"
					href="/privacy"
				>
					Privacy
				</a>
				<a
					className="underline mr-4 text-gray-700 dark:text-gray-400"
					href="/legal"
				>
					Legal Disclosure
				</a>
			</div>
		</div>
	);
}

function FooterEasterEggRenderer({ count }) {
	switch (count) {
		case 0:
			return <MoonIcon />;
		case 1:
			return <TVIcon />;
		case 2:
			return <SettingsIcon />;
		case 3:
			return <FeatherIcon />;
		case 4:
			return <GlobeIcon />;
		case 5:
			return <RainbowFlagIcon />;
		case 6:
			return <TransFlagIcon />;
		case 7:
			return <HeartIcon />;
		case 8:
			return (
				<div className="flex dark:text-gray-400">
					<HeartIcon />
					<p className="ml-2 text-gray-600">{'you are amazing <3'}</p>
				</div>
			);
		default:
			return <p></p>;
	}
}
