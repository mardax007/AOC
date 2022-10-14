export default function solution(input:string) {
	const dimensions = (input.split("\n").map(v => v.split("x")) as any) as Array<Array<number>>;
	let totalsqfeet = 0

	for(const dimension of dimensions){
		const [L, W, H] = dimension;
		const sqfeet = [L*W, W*H, H*L]
		const smallest = Math.min(...sqfeet);
		totalsqfeet += sqfeet.map(dim => dim*2).reduce((a,b) => a+b, 0) + smallest
	}

	return totalsqfeet;
}