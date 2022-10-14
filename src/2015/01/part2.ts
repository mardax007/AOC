export default function solution(input:string) {
    const directions = input.split("")

    let level = 0;
    
    for (let i = 0; i < directions.length; i++) {
        level += directions[i] === "(" ? 1 : -1;

        if (level < 0) {
            return i + 1;
        }
    }
}