export default function solution(input:string) {
	const cleanInput = input.split('\r\n') as string[];
	const letters = "$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	
	function findSharedItem(itemsA: string, itemsB: string): string {
		const typesInA = [];
		const typesInB = [];
		for (let i = 0; i < itemsA.length; i++) {
			if (itemsA[i] === itemsB[i]) {
				return itemsA[i];
			}

			typesInA.push(itemsA[i]);
			typesInB.push(itemsB[i]);
	
			if (typesInB.includes(itemsA[i])) {
				return itemsA[i];
			}
			else if (typesInA.includes(itemsB[i])) {
				return itemsB[i];
			}
		}
		return "";
	}
	
	const result = cleanInput.reduce((currentSum, rucksack) => {
		const sharedType = findSharedItem(rucksack.substring(0, rucksack.length / 2), rucksack.substring(rucksack.length / 2))
		if (!sharedType) {
			return currentSum
		}

		return currentSum + letters.indexOf(sharedType);
	}, 0);
	
	return result;
}