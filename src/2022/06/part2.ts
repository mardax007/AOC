export default function solution(input:string) {
	const foundLetters: string[] = []
	const inputArray = input.split("")
	let marker = ""

	inputArray.forEach(letter => {
		if (marker === "") {
			foundLetters.push(letter)
			if (foundLetters.length > 14) foundLetters.splice(0, 1)
			if (foundLetters.length === new Set(foundLetters).size && foundLetters.length === 14) marker = foundLetters.join("")
		}
	});

	return input.indexOf(marker) + 14
}