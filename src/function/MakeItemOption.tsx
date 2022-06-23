export const MakeItemOption = (array: string[]) => {
  return array.map((item: string) => <option>{item}</option>);
};
