const isFullyOverlapped = (pair: string) => {
  const elf = pair.split(",");
  const firstElf = elf[0].split("-").map((val) => parseInt(val, 10));
  const secondElf = elf[1].split("-").map((val) => parseInt(val, 10));
  let res = false;
  if (
    (firstElf[0] >= secondElf[0] && firstElf[1] <= secondElf[1]) ||
    (secondElf[0] >= firstElf[0] && secondElf[1] <= firstElf[1])
  )
    res = true;
  return res;
};

const part1 = (data: string[]) => {
  let total = 0;
  data.forEach((pair) => {
    if (isFullyOverlapped(pair)) total += 1;
  });
  console.log("part 1 num of fully overlapped pairs", total);
};

const isOverlapped = (pair: string) => {
  const elf = pair.split(",");
  const firstElf = elf[0].split("-").map((val) => parseInt(val, 10));
  const secondElf = elf[1].split("-").map((val) => parseInt(val, 10));
  let res = false;
  if (
    (firstElf[0] >= secondElf[0] && firstElf[0] <= secondElf[1]) ||
    (firstElf[1] >= secondElf[0] && firstElf[1] <= secondElf[1]) ||
    (secondElf[0] >= firstElf[0] && secondElf[0] <= firstElf[1]) ||
    (secondElf[1] >= firstElf[0] && secondElf[1] <= firstElf[1])
  )
    res = true;
  return res;
};

const part2 = (data: string[]) => {
  let total = 0;
  data.forEach((pair) => {
    if (isOverlapped(pair)) total += 1;
  });
  console.log("part 2 num of overlapped pairs", total);
};

const main = async () => {
  const inputData = await Deno.readTextFile("day04.txt");
  const data = inputData.trim().split("\r\n").map(String);
  part1(data);
  part2(data);
};

main();
