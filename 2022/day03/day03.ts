const splitInHalf = (value: string) => {
  const index = value.length / 2;
  return [value.substring(0, index), value.substring(index)];
};

const findCommon = (value1: string, value2: string) => {
  for (let i = 0; i < value1.length; i++) {
    if (value2.includes(value1[i])) return value1[i];
  }
  return "";
};

const letterToNumber = (letter: string) => {
  if (letter === letter.toUpperCase()) {
    return letter.charCodeAt(0) - 38;
  }
  return letter.charCodeAt(0) - 96;
};

const part1 = (data: string[]) => {
  let total = 0;
  data.forEach((sack) => {
    const [firstHalf, secondHalf] = splitInHalf(sack);
    const commonLetter = findCommon(firstHalf, secondHalf);
    total += letterToNumber(commonLetter);
  });
  console.log("part 1 sum of priorites:", total);
};

const groupByThree = (data: string[]) => {
  const res = [];
  let group = [];
  for (let i = 0; i < data.length; i++) {
    group.push(data[i]);
    if ((i + 1) % 3 === 0) {
      res.push(group);
      group = [];
    }
  }
  return res;
};

const findCommonInThree = (value1: string, value2: string, value3: string) => {
  for (let i = 0; i < value1.length; i++) {
    if (value2.includes(value1[i]) && value3.includes(value1[i]))
      return value1[i];
  }
  return "";
};

const part2 = (data: string[]) => {
  const groups = groupByThree(data);
  let total = 0;
  groups.forEach((elf) => {
    const commonLetter = findCommonInThree(elf[0], elf[1], elf[2]);
    total += letterToNumber(commonLetter);
  });
  console.log("part 2 sum of priorites:", total);
};

const main = async () => {
  const inputData = await Deno.readTextFile("day03.txt");
  const data = inputData.trim().split("\r\n").map(String);
  part1(data);
  part2(data);
};

main();
