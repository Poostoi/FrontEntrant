import "../App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RegistationOrLoginButton } from "./RegistationOrLoginButton";

export const TopPanel = () => {
  return (
    <div className="top-panel">
      <Col>
        <RegistationOrLoginButton />
      </Col>
    </div>
  );
};
