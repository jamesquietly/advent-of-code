const stacks = [
  ["B", "V", "S", "N", "T", "C", "H", "Q"],
  ["W", "D", "B", "G"],
  ["F", "W", "R", "T", "S", "Q", "B"],
  ["L", "G", "W", "S", "Z", "J", "D", "N"],
  ["M", "P", "D", "V", "F"],
  ["F", "W", "J"],
  ["L", "N", "Q", "B", "J", "V"],
  ["G", "T", "R", "C", "J", "Q", "S", "N"],
  ["J", "S", "Q", "C", "W", "D", "M"],
];

const getLastLetters = () => {
  let res = "";
  stacks.forEach((stack) => {
    const letter = stack[stack.length - 1];
    res += letter;
  });
  return res;
};

const moveBox = (amount: number, from: number, to: number) => {
  const removed: string[] = [];
  for (let i = 0; i < amount; i++) {
    const box = stacks[from - 1].pop();
    if (box) removed.push(box);
  }
  if (removed.length > 0) stacks[to - 1] = stacks[to - 1].concat(removed);
};

const part1 = (data: number[][]) => {
  data.forEach((move) => {
    moveBox(move[0], move[1], move[2]);
  });
  const msg = getLastLetters();
  console.log("part 1 boxes on top", msg.toUpperCase());
};

const main = async () => {
  const inputData = await Deno.readTextFile("day05.txt");
  const data = inputData
    .trim()
    .split("\r\n")
    .map((val) => val.replace(/move\s/, ""))
    .map((val) => val.replace(/\sfrom\s/, ","))
    .map((val) => val.replace(/\sto\s/, ","))
    .map((val) => val.split(",").map(Number));
  part1(data);
};

main();
