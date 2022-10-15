export default function solution(input:string) {
    const moves = input.split("")
	const houses: {[key: string]: number} = {
        String: 0
    }

    let Sx = 0
    let Sy = 0

    let Rx = 0
    let Ry = 0

    for (let i = 0; i < moves.length; i += 2) {        
        switch (moves[i]) {
            case "^":
                Sy++
                break;
            case "v":
                Sy--
                break;
            case ">":
                Sx++
                break;
            case "<":
                Sx--
                break;
        }

        switch (moves[i + 1]) {
            case "^":
                Ry++
                break;
            case "v":
                Ry--
                break;
            case ">":
                Rx++
                break;
            case "<":
                Rx--
                break;
        }

        const Scords: string = `${Sx},${Sy}`
        houses[Scords] = (houses[Scords] || 0) + 1

        const Rcords: string = `${Rx},${Ry}`
        houses[Rcords] = (houses[Rcords] || 0) + 1
    }
    
    return Object.keys(houses).length - 1
}