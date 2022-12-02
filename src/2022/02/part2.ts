export default function solution(input:string) {
	const cleanInput = input.split("\r\n").map(v => v.split(" ")!);
	const plays = ["A", "B", "C"]
	let totalScore = 0;

	cleanInput.forEach(game => {
		const [opponent, result] = game;
		if (result === "X") totalScore += ((plays.indexOf(opponent) + 2) % 3) + 1;
		else if (result === "Y") totalScore += plays.indexOf(opponent) + 4;
		else totalScore += ((plays.indexOf(opponent) + 1) % 3) + 7;
	});

	return totalScore;
}