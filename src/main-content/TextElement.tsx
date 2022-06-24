import { Form } from "react-bootstrap";

interface ITextElement {
  name: string;
  value: string;
  valueLabel: string;
  setValue: (value: string) => void;
}
export const TextElement = ({
  name, //название controlID
  value, //значения select
  setValue, //метод его изменения
  valueLabel, //название label
}: ITextElement) => {
  const handler = (e: any) => {
    setValue(e.value);
  };
  return (
    <>
      <Form.Group className="mb-3" controlId={"Form." + name}>
        <Form.Label className="ml-3">{valueLabel}</Form.Label>
        <Form.Control value={value} onChange={handler}></Form.Control>
      </Form.Group>
    </>
  );
};
