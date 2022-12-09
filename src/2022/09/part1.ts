export default function solution(input: string) {
	const steps = input.split('\r\n').map(x => x.split(' '))
	const visited = new Set<string>();
    let pos = [[0, 0], [0, 0]]

    for (const i of steps) {
        for (let j = 0; j < parseInt(i[1]); j++) {
            pos[0][(i[0] == "R" || i[0] == "L") ? 0 : 1] += (i[0] == "R" || i[0] == "U") ? 1 : -1;
            for (let k = 0; k < 1; k++) {
                let dx = pos[k][0] - pos[k + 1][0];
                let dy = pos[k][1] - pos[k + 1][1];
				const xPosChange = () => pos[k + 1][0] += dx > 0 ? 1 : -1;
				const yPosChange = () => pos[k + 1][1] += dy > 0 ? 1 : -1;
                if (Math.abs(dx) > 1) { xPosChange(); (dy != 0) ?? yPosChange(); }
				else if (Math.abs(dy) > 1) { yPosChange(); (dx != 0) ?? xPosChange(); }
            }
			visited.add(`${pos[1][0]},${pos[1][1]}`);
        }
    }
    return visited.size;
}