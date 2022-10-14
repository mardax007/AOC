export default function solution(input:string) {
    const directions = input.split("")

    return directions.length - directions.filter(d => d === ")").length
}