export default function solution(input: string) {
	const dirs = [[-1, 0], [0, -1], [0, 1], [1, 0]];

	const cleanInput = input.split('\r\n').map((line) => line.split('').map(Number));
	const scores = cleanInput.map((row) => row.map(() => 1));
	for (let i = 0; i < cleanInput.length; i++) {
		for (let j = 0; j < cleanInput[i].length; j++) {
			for (const [di, dj] of dirs) {
				let [i2, j2] = [i + di, j + dj];
				for (;i2 >= 0 && j2 >= 0 && i2 < cleanInput.length && j2 < cleanInput[i2].length; i2 += di, j2 += dj) {
					if (cleanInput[i2][j2] >= cleanInput[i][j]) {
						i2 += di;
						j2 += dj;
						break;
					}
				}
				scores[i][j] *= Math.abs(i2 - di - i) + Math.abs(j2 - dj - j);
			}
		}
	}
	return Math.max(...scores.flat());
}