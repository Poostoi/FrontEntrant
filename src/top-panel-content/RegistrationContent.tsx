import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MethodAxios } from "../function/MethodAxios";
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
  const handleInputChange = (e: any) => {
    const target = e.target;
    const value = target.value;
    if (target.name === "login") setUsername(value);
    else if (target.name === "password") setPassword(value);
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{nameModal}</Modal.Title>
      </Modal.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="LoginForm.ControlLogin">
            <Form.Label>{error}</Form.Label>
            <Form.Label>Login</Form.Label>
            <Form.Control
              required
              type="text"
              name="login"
              placeholder="Имя пользователя"
              minLength={3}
              maxLength={15}
              value={username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="LoginForm.ControlPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="text"
              name="password"
              placeholder="Пароль"
              minLength={3}
              maxLength={15}
              value={password}
              onChange={handleInputChange}
            />
          </Form.Group>
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
