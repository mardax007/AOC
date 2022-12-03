export default function solution(input:string) {
	const cleanInput = input.split('\r\n') as string[];
	const letters = "$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	let result = 0;
	
	for (let i = 0; i < cleanInput.length; i += 3) {
		const elf1 = cleanInput[i].split("") ?? [];
		const elf2 = cleanInput[i + 1].split("") ?? [];
		const elf3 = cleanInput[i + 2].split("") ?? [];

		let badge = [elf1, elf2, elf3].shift().filter((v) => {
			return [elf1, elf2, elf3].every((a) => {
				return a.indexOf(v) !== -1;
			});
		});

		result += letters.indexOf(badge[0]);
	}

	return result;
}