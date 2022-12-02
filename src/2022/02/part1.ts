export default function solution(input:string) {
	const cleanInput = input.split("\r\n");

	const plays = ["X", "Y", "Z"]

	let totalScore = 0;

	cleanInput.forEach(game => {
		const opponent = game.split(" ")[0];
		const play = game.split(" ")[1];

		totalScore += plays.indexOf(play) + 1;


		if (
			(play === "X" && opponent === "A") || 
			(play === "Y" && opponent === "B") || 
			(play === "Z" && opponent === "C")
		) {
			totalScore += 3;
		} else if (
			(play === "X" && opponent === "B") || 
			(play === "Y" && opponent === "C") || 
			(play === "Z" && opponent === "A")
		) {
			totalScore += 0;
		} else {
			totalScore += 6;
		}
	});

	return totalScore;
}