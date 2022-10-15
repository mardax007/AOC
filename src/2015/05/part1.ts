export default function solution(input:string) {
	const thx = (input.split("\n")) as Array<String>;

	let nice = 0;

	thx.forEach(word => {
		(word.match(/[aeiou]/gi)?.length || 0) >= 3 && word.match( /(.)\1/gm) && !word.match(/ab|cd|pq|xy/gi) ? nice++ : null;
	});

	return nice;
}