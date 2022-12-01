export default function solution(input:string) {
	const cleanInput = input.split("\n\t\n\t")

	let mostCal = 0;

	cleanInput.forEach(elfInv => {
		let totalCal = 0
		elfInv.split("\n\t").forEach(cal => {
			totalCal = totalCal + parseInt(cal)
		});

		if(totalCal > mostCal) mostCal = totalCal
	});

	return mostCal;
}