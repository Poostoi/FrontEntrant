import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { RegistrationContent } from "./RegistrationContent";
import { ModalWindow } from "./ModalWindow";
import { LoginContent } from "./LoginContent";

export const RegistationOrLoginButton = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const toShowLogin = () => {
    setShowLogin(!showLogin);
  };
  const toShowRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div>
      <Row className="justify-content-end">
        <Col xs={3} md={4}>
          <ModalWindow
            showBool={showLogin}
            toShow={toShowLogin}
            nameButton="Войти"
            contentModal={
              <LoginContent
                showBool={showLogin}
                nameModal="Авторизация"
                toShow={toShowLogin}
              />
            }
          />
        </Col>
        <Col xs={3} md={4}>
          <ModalWindow
            showBool={showRegistration}
            toShow={toShowRegistration}
            nameButton="Регистрация"
            contentModal={
              <RegistrationContent
                showBool={showRegistration}
                nameModal="Регистрация"
                toShow={toShowRegistration}
              />
            }
          />
        </Col>
      </Row>
    </div>
  );
};
