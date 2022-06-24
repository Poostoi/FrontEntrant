export const MakeItemOption = (array: string[]) => {
  return array.map((item: string) => (
    <option key={Math.random()}>{item}</option>
  ));
};
