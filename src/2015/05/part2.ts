export default function solution(input:string) {
	const thx = (input.split("\n")) as Array<String>;

	let nice = 0;

	thx.forEach(word => {
		word.match(/(..).*\1/gm) && word.match( /(.).\1/gm) ? nice++ : null;
	});

	return nice;
}