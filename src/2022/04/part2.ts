export default function solution(input:string) {
	const cleanInput = input.split(/\r?\n/).filter(Boolean).map(s => s.split(",").map(s => s.split("-").map(Number)))
	const overlaps = (rangeA: number[], rangeB: number[]) => (rangeA[0] <= rangeB[0] && rangeA[1] >= rangeB[0]) || (rangeB[0] <= rangeA[0] && rangeB[1] >= rangeA[0])
	return cleanInput.filter(([rangeA, rangeB]) => overlaps(rangeA, rangeB)).length;
}