import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MethodAxios } from "../function/MethodAxios";
import { TextElement } from "../function/TextElement";
interface IShow {
  showBool: boolean;
  toShow: () => void;
  nameModal: string;
}
export const RegistrationContent = ({ showBool, toShow, nameModal }: IShow) => {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      registration();
      toShow();
    }
  };
  const registration = () => {
    MethodAxios({
      method: "post",
      urlMethod: "Account/Registration",
      data: { login: username, password: password },
      errorMethod: setError,
    });
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{nameModal}</Modal.Title>
      </Modal.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <TextElement
            name="Username"
            value={username}
            setValue={setUsername}
            valueLabel="Имя пользователя"
            minString={3}
            maxString={15}
          />
          <TextElement
            name="Password"
            value={password}
            setValue={setPassword}
            valueLabel="Пароль"
            minString={3}
            maxString={15}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toShow}>
            Закрыть
          </Button>
          <Button type="submit" variant="primary">
            Зарегистрироваться
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};
