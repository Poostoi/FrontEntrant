import { Form } from "react-bootstrap";

interface INumberElement {
  name: string;
  value: number;
  valueLabel: string;
  setValue: (value: number) => void;
  maxNumber: number;
  minNumber: number;
  classNumber: string;
}
export const NumberElement = ({
  name, //название controlID
  value, //значения select
  setValue, //метод его изменения
  valueLabel, //название label
  maxNumber,
  minNumber,
  classNumber,
}: INumberElement) => {
  const checkOnNumber = (e: any) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight"
    ) {
      e.preventDefault();
    }
  };
  const changeOnNumber = (e: any) => {
    const value = +e.target.value;
    if (value !== null && value >= minNumber && value <= maxNumber)
      setValue(e.target.value);
  };
  return (
    <>
      <Form.Group className={`mb-3 ${classNumber}`} controlId={"Form." + name}>
        <Form.Label className="ml-3">{valueLabel}</Form.Label>
        <Form.Control
          required
          value={value}
          type="number"
          onKeyDown={checkOnNumber}
          onChange={changeOnNumber}
        ></Form.Control>
      </Form.Group>
    </>
  );
};
