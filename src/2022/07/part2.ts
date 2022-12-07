export default function solution(input: string) {
	const cleanInput = input.split("\r\n");

	type Dir = { children: string[], size: number, totalSize: number }
	const structure: { [key: string]: Dir } = {};
	let currentDir = "";

	function calcDirSize(dir: Dir) {
		let size = dir.size;
		for (let child of dir.children) size += calcDirSize(structure[child]);
		return size;
	}

	cleanInput.forEach(IO => {
        const cmd = IO.split(" ");
		if (cmd[1] == "cd") {
			if (cmd[2] !== "..") {
                currentDir += `.${cmd[2]}`;
				structure[currentDir] = { children: [], size: 0, totalSize: 0 }
            } else currentDir = currentDir.replace(/\.\w+$/, "");
		} else if (cmd[0] == "dir") {
			const name = `${currentDir}.${IO.match(/\w+/g)![1]}`;
			structure[name] = { children: [], size: 0, totalSize: 0 }
			structure[currentDir].children.push(name);
		} else structure[currentDir].size += +IO.match(/\d+/)!;
	});
    
    for (const k in structure) structure[k].totalSize = calcDirSize(structure[k]);

	return Object.values(structure).map(v => v.totalSize).sort((a, b) => a - b).find(v => v >= structure["./"].totalSize - 40000000);
}