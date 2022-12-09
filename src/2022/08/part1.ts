export default function solution(input: string) {
	const dirs = [[-1, 0], [0, -1], [0, 1], [1, 0]];

	const cleanInput = input.split('\r\n').map((line) => line.split('').map(Number));
	const visibles = cleanInput.map((row) => row.map(() => 0));
	for (let i = 0; i < cleanInput.length; i++) {
		for (let j = 0; j < cleanInput[i].length; j++) {
			outer: for (const [di, dj] of dirs) {
				let [i2, j2] = [i + di, j + dj];
				for (;i2 >= 0 && j2 >= 0 && i2 < cleanInput.length && j2 < cleanInput[i2].length;i2 += di, j2 += dj) {
					if (cleanInput[i2][j2] >= cleanInput[i][j]) continue outer;
				}
				visibles[i][j] = 1;
				break;
			}
		}
	}
	return visibles.flat().reduce((acc, n) => acc + n);
}