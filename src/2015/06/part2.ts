export default function solution(input:string) {
	const instructions = input.split("\n");
	const lights: Array<number> = new Array(1000*1000).fill(0);

	instructions.forEach(ins => {
		const command = ins.match(/\D+/)![0];
		const [startX, StartY, endX, endY] = ins.match(/\d+/g)?.map(v => +v)!;

		for(let X = startX; X <= endX; X++){
			for(let Y = StartY; Y <= endY; Y++){

				const cord = 1000 * X + Y

				if(command === "turn on ") lights[cord]++;
				if(command === "turn off ") lights[cord] = lights[cord] === 0 ? 0 : lights[cord]-1;
				if(command === "toggle ") lights[cord] += 2;
			}
		}
	})

	console.log(lights.reduce((partialSum, a) => partialSum + a, 0))

	return lights.reduce((a, b) =>  a + b)

}