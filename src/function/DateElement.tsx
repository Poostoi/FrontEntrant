import { Form } from "react-bootstrap";

interface IDateElement {
  name: string;
  valueLabel: string;
  setValue: (value: string) => void;
}
export const DateElement = ({
  name, //название controlID
  setValue, //метод его изменения
  valueLabel, //название label
}: IDateElement) => {
  const handlerDate = (e: any) => {
    setValue(e.value);
  };
  return (
    <>
      <Form.Group className="mb-3" controlId={"Form." + name}>
        <Form.Label className="ml-3">{valueLabel}</Form.Label>
        <Form.Control
          type="date"
          required
          onChange={handlerDate}
        ></Form.Control>
      </Form.Group>
    </>
  );
};
