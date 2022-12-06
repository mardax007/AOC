export default function solution(input:string) {
	const foundLetters: string[] = []
	const inputArray = input.split("")
	let marker = ""

	inputArray.forEach(letter => {
		if (marker === "") {
			foundLetters.push(letter)
			if (foundLetters.length > 4) foundLetters.splice(0, 1)
			if (foundLetters.length === new Set(foundLetters).size && foundLetters.length === 4) marker = foundLetters.join("")
		}
	});

	return input.indexOf(marker) + 4
}