import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { DateElement } from "./DateElement";
import { SelectElement } from "./SelectElement";
import { TextElement } from "./TextElement";

export const Questionary = () => {
  const gender = ["Мужской", "Женский"];
  const mariedStatus = ["Не в браке", "В браке"];
  const nationalities = ["Русский"];
  const [dateBirth, setDateBirth] = useState("");
  const [sex, setSex] = useState(gender[0]);
  const [nationality, setNationality] = useState(nationalities[0]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [mother, setMother] = useState(false);
  const [father, setFather] = useState(false);
  const [countBrotherOrSister, setCountBrotherOrSister] = useState(0);
  const [maried, setMaried] = useState(mariedStatus[0]);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
    } else {
    }
  };

  return (
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <Row>
          <Row>
            <Col>
              <DateElement
                name="DateBirth"
                setValue={setDateBirth}
                valueLabel="Дата рождения"
              />
            </Col>
            <Col>
              <SelectElement
                name="Sex"
                value={sex}
                setValue={setSex}
                valueLabel="Пол"
                array={gender}
              />
            </Col>
            <Col>
              <SelectElement
                name="Nationality"
                value={nationality}
                setValue={setNationality}
                valueLabel="Национальность"
                array={nationalities}
              />
            </Col>
          </Row>
          <TextElement
            name="Surname"
            value={surname}
            setValue={setSurname}
            valueLabel="Фамилия"
          />
          <TextElement
            name="Name"
            value={name}
            setValue={setName}
            valueLabel="Имя"
          />

          <TextElement
            name="Patronymic"
            value={patronymic}
            setValue={setPatronymic}
            valueLabel="Отчество"
          />
          <Row>
            <Col>
              <Form.Check
                type={"checkbox"}
                id={`default-checkbox`}
                label={`Отец`}
                onChange={() => {
                  setFather(!father);
                }}
              />
            </Col>
            <Col>
              <Form.Check
                type={"checkbox"}
                id={`default-checkbox`}
                label={`Мать`}
                onChange={() => setMother(!mother)}
              />
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId={"Form.СountBrotherOrSister"}
              >
                <Form.Label className="ml-3">{"Братьев, сестёр"}</Form.Label>
                <Form.Control
                  type="number"
                  value={countBrotherOrSister}
                  onChange={(e: any) => setCountBrotherOrSister(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <SelectElement
            name="Maried"
            value={maried}
            setValue={setMaried}
            valueLabel="Семейное положение"
            array={mariedStatus}
          />
        </Row>
      </Form>
    </>
  );
};
