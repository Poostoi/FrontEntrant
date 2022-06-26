import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { DateElement } from "../function/DateElement";
import { NumberElement } from "../function/NumberElement";
import { SelectElement } from "../function/SelectElement";
import { TextElement } from "../function/TextElement";
interface IQuestionary {
  setCheck: (e: any) => void;
  validated: boolean;
}
export const Questionary = ({ setCheck, validated }: IQuestionary) => {
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
  const [hostel, setHostel] = useState(false);
  const [countBrotherOrSister, setCountBrotherOrSister] = useState(0);
  const [maried, setMaried] = useState(mariedStatus[0]);

  const change = (e: any) => {
    const form = e.currentTarget;

    console.log(form.checkValidity());
    if (form.checkValidity()) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  return (
    <>
      <Form noValidate validated={validated} onChange={change}>
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
                id={`checkbox-father`}
                label={`Отец`}
                onChange={() => {
                  setFather(!father);
                }}
              />
              <Form.Check
                type={"checkbox"}
                id={`checkbox-mother`}
                label={`Мать`}
                onChange={() => setMother(!mother)}
              />
              <Form.Check
                type={"checkbox"}
                id={`checkbox-hostel`}
                label={`Общежитие`}
                onChange={() => setHostel(!hostel)}
              />
            </Col>
            <Col>
              <NumberElement
                name="СountBrotherOrSister"
                value={countBrotherOrSister}
                classNumber=""
                setValue={setCountBrotherOrSister}
                valueLabel="Братьев, сестёр"
                minNumber={0}
                maxNumber={20}
              />
            </Col>
            <SelectElement
              name="Maried"
              value={maried}
              setValue={setMaried}
              valueLabel="Семейное положение"
              array={mariedStatus}
            />
          </Row>
        </Row>
      </Form>
    </>
  );
};
