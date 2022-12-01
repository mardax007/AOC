export default function solution(input:string) {
	const cleanInput = input.split("\n\t\n\t")

	let topCals: number[] = []

	cleanInput.forEach((elfInv: string) => {
		let totalCal = 0
		elfInv.split("\n\t").forEach(cal => {
			totalCal = totalCal + parseInt(cal)
		});

		topCals.push(totalCal)
	});

	topCals.sort((a, b) => b - a)

	return topCals[0] + topCals[1] + topCals[2];
}