export default function solution(input: string) {
    const cleanInput = input.split('\r\n').map(x => x.split(' '))
    let register = 1;
    let memory: number[] = [0];

    cleanInput.forEach(cmd => {
        memory.push(register * memory.length);
        if (cmd[0] === "addx") {
            memory.push(register * memory.length);
            register += +cmd[1];
        }
    });

    return memory[20] + memory[60] + memory[100] + memory[140] + memory[180] + memory[220];
}