import { Form } from "react-bootstrap";

interface ITextElement {
  name: string;
  value: string;
  valueLabel: string;
  setValue: (value: string) => void;
  minString?: number | undefined;
  maxString?: number | undefined;
}
export const TextElement = ({
  name, //название controlID
  value, //значения select
  setValue, //метод его изменения
  valueLabel, //название label
  minString,
  maxString,
}: ITextElement) => {
  const handler = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Form.Group className="mb-3" controlId={"Form." + name}>
        <Form.Label className="ml-3">{valueLabel}</Form.Label>
        <Form.Control
          minLength={minString}
          maxLength={maxString}
          value={value}
          required
          onChange={handler}
        ></Form.Control>
      </Form.Group>
    </>
  );
};
