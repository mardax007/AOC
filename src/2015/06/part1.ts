export default function solution(input:string) {
	const instructions = input.split("\n");
	const lights = new Array(1000*1000).fill(0);

	instructions.forEach(ins => {
		const command = ins.match(/\D+/)![0];
		const [startX, StartY, endX, endY] = ins.match(/\d+/g)?.map(v => +v)!;

		for(let X = startX; X <= endX; X++){
			for(let Y = StartY; Y <= endY; Y++){

				const cord = 1000 * X + Y

				if(command === "turn on ") lights[cord] = 1;
				if(command === "turn off ") lights[cord] = 0;
				if(command === "toggle ") lights[cord] = +!lights[cord];

			}
		}
	})

	return lights.filter(v => v === 1).length

}