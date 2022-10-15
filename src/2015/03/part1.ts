export default function solution(input:string) {
    const moves = input.split("")
	const houses: {[key: string]: number} = {
        String: 0
    }

    let x = 0
    let y = 0

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        
        switch (move) {
            case "^":
                y++
                break;
            case "v":
                y--
                break;
            case ">":
                x++
                break;
            case "<":
                x--
                break;
        }

        const cords: string = `${x},${y}`
        houses[cords] = (houses[cords] || 0) + 1
    }
    
    return houses
}