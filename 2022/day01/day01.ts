const addCalories = (data: number[]) => {
	const res: number[] = [];
	let sum = 0;
	data.forEach(num => {
		if (num === 0) {
			res.push(sum);
			sum = 0;
		}
		sum += num;
	});
	return res;
};

const findMostCalories = (data: number[]) => {
	let bigNum = data[0] || 0;
	for (let i = 0; i < data.length; i++) {
		if (data[i] > bigNum) {
			bigNum = data[i];
		}
	}
	return bigNum;
};

const part1 = (data: number[]) => {
	const calories = addCalories(data);
	const mostCalories = findMostCalories(calories);
	console.log('most calories:', mostCalories);
};

const part2 = (data: number[]) => {
	const calories = addCalories(data);
	const sortedCalories = calories.sort((a, b) => b - a);
	const sumTopThree = sortedCalories[0] + sortedCalories[1] + sortedCalories[2];
	console.log('sum of top 3:', sumTopThree);
};

const main = async () => {
	const inputData = await Deno.readTextFile('day01.txt');
	const data = inputData.trim().split('\n').map(Number);
	part1(data);
	part2(data);
};

await main();