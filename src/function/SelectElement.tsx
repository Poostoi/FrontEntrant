import { Form } from "react-bootstrap";
import { MakeItemOption } from "./MakeItemOption";

interface ISelectElement {
  name: string;
  value: string;
  valueLabel: string;
  setValue: (value: string) => void;
  array: string[];
}
export const SelectElement = ({
  name, //название controlID
  value, //значения select
  setValue, //метод его изменения
  valueLabel, //название label
  array, //массив со значениями выпадающего списка
}: ISelectElement) => {
  const handlerSelect = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Form.Group className="mb-3" controlId={"Form." + name}>
        <Form.Label className="ml-3">{valueLabel}</Form.Label>
        <Form.Select value={value} required onChange={handlerSelect}>
          {MakeItemOption(array)}
        </Form.Select>
      </Form.Group>
    </>
  );
};
