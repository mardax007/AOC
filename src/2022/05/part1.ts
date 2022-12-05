export default function solution(input: string) {
	const cargo: { [key: number]: string[] } = {
		1: ["Q", "W", "P", "S", "Z", "R", "H", "D"],
		2: ["V", "B", "R", "W", "Q", "H", "F"],
		3: ["C", "V", "S", "H"],
		4: ["H", "F", "G"],
		5: ["P", "G", "J", "B", "Z"],
		6: ["Q", "T", "J", "H", "W", "F", "L"],
		7: ["Z", "T", "W", "D", "L", "V", "J", "N"],
		8: ["D", "T", "Z", "C", "J", "G", "H", "F"],
		9: ["W", "P", "V", "M", "B", "H"]
	}


	function moveCargo(crates: number, origin: number, position: number) {
		const cratesMoved = []
		for (let i = 0; i < crates; i++) {
			cratesMoved[crates - 1 - i] = cargo[origin][cargo[origin].length - 1]
			cargo[origin].splice(cargo[origin].length - 1)
		}

		cratesMoved.forEach(crate => {
			cargo[position].push(crate)
		});
	}
	
	function translateInput() {
		const inputArray = input.split("\r\n")

		inputArray.forEach(input => {
			const info = input.split(" ")

			console.log(Number(info[1]), Number(info[3]), Number(info[5]))

			moveCargo(Number(info[1]), Number(info[3]), Number(info[5]))
			console.log(cargo)
		});
	}

	translateInput()

	const topCrates = Object.values(cargo).map(cargo => cargo[cargo.length - 1])

	return topCrates.join("")
}