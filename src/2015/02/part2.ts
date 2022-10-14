export default function solution(input:string) {
	const dimensions = (input.split("\n").map(v => v.split("x")) as any) as Array<Array<number>>;
	let totalfeet = 0

	for(const dimension of dimensions){
		const [L, W, H] = dimension;

        dimension.sort((a,b) => a-b);

        totalfeet += 2 * dimension[0] + 2 * dimension[1] + (L * W * H);
	}

	return totalfeet;
}