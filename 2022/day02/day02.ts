const points = new Map<string, number>([
  ["A", 1],
  ["B", 2],
  ["C", 3],
  ["X", 1],
  ["Y", 2],
  ["Z", 3],
]);

const calculateOutcome = (players: string) => {
  let res = 0;
  switch (players[0]) {
    case "A":
      switch (players[2]) {
        case "X":
          res += 3;
          break;
        case "Y":
          res += 6;
          break;
      }
      break;
    case "B":
      switch (players[2]) {
        case "Y":
          res += 3;
          break;
        case "Z":
          res += 6;
          break;
      }
      break;
    case "C":
      switch (players[2]) {
        case "X":
          res += 6;
          break;
        case "Z":
          res += 3;
          break;
      }
      break;
  }
  res += points.get(players[2]) || 0;
  return res;
};

const part1 = (data: string[]) => {
  let score = 0;
  data.forEach((round) => {
    score += calculateOutcome(round);
  });
  console.log("part 1 total score:", score);
};

const main = async () => {
  const inputData = await Deno.readTextFile("day02.txt");
  const data = inputData.trim().split("\r\n").map(String);
  part1(data);
};

await main();
