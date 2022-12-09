const main = async () => {
	const [inputFile] = Deno.args;
	const inputData = await Deno.readTextFile(inputFile);
	const data = inputData.trim().split('\n').map(Number);
	console.log('hello world', data);
};

await main();