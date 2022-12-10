export default function solution(input: string) {
    const cleanInput = input.split('\r\n').map(x => x.split(' '))
    let register = 1;
    let memory: number[] = [];
    let display = "";

    cleanInput.forEach(cmd => {
        memory.push(register);
        if (cmd[0] === "addx") {
            memory.push(register);
            register += +cmd[1];
        }
    });
    memory.forEach((regval, cycle) => {
        if (cycle % 40 === 0) display += "\n";
        [regval, regval - 1, regval + 1].includes(cycle % 40) ? display += "#" : display += ".";
    });

    return display;
}