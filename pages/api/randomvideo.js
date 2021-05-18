// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const urls = [
	'https://youtu.be/OlOViz1bCCo',
	'https://youtu.be/kbgI68rIXmk',
	'https://youtu.be/00HnmrHBgSM',
	'https://youtu.be/SckcB099zrg',
	'https://youtu.be/9F07l4npE0Y',
	'https://youtu.be/kBJIl-cMWwE',
	'https://youtu.be/KQRP8oTOoPs',
	'https://www.youtube.com/watch?v=rksaoaqt3JA',
	'https://www.youtube.com/watch?v=77pnVFLkUjM',
	'https://youtu.be/SXPUPoal9Q8',
	'https://youtu.be/rREqabEbz_M',
	'https://youtu.be/rwSJwzE7lAg',
	'https://youtu.be/aMgCBYgVwsI',
	'https://youtu.be/aMgCBYgVwsI',
	'https://youtu.be/uub0z8wJfhU',
];

export default (req, res) => {
	res.redirect(urls[Math.floor(Math.random() * urls.length)]);
};
