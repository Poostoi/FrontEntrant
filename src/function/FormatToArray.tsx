export const FormatToArray = (answer: []) => {
  let array = [""];

  answer.forEach((e: any) => {
    array.push(e.name);
  });
  return array;
};
