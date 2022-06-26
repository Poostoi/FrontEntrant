import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { DateElement } from "../function/DateElement";
import { SelectElement } from "../function/SelectElement";
import { TextElement } from "../function/TextElement";
interface IPassport {
  setCheck: (e: any) => void;
  validated: boolean;
}
export const Passport = ({ setCheck, validated }: IPassport) => {
  const faculteis = [
    "Физико-математический",
    "Инженерно-технический",
    "Экономический",
    "dsfsd",
    "afasf",
  ];
  const [serialPassport, setSerialPassport] = useState("");
  const [placeGiven, setPlaceGiven] = useState(faculteis[1]);
  const [issuedBy, setIssuedBy] = useState("");
  const [dateGiven, setDateGiven] = useState("2022-01-02");
  const [placeBirth, setPlaceBirth] = useState(faculteis[0]);
  const [firstCitizenship, setFirstCitizenship] = useState(faculteis[0]);
  const [secondCitizenship, setSecondCitizenship] = useState(faculteis[0]);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
    } else {
    }
  };

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
      <Form
        noValidate
        validated={validated}
        onChange={change}
        onSubmit={handleSubmit}
      >
        <Row>
          <Col>
            <TextElement
              name="SerialPassport"
              value={serialPassport}
              setValue={setSerialPassport}
              valueLabel="Серия паспорта"
            />
          </Col>
          <Col>
            <SelectElement
              name="PlaceGiven"
              value={placeGiven}
              setValue={setPlaceGiven}
              valueLabel="Место выдачи"
              array={faculteis}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextElement
              name="IssuedBy"
              value={issuedBy}
              setValue={setIssuedBy}
              valueLabel="Кем выдан"
            />
          </Col>
          <Col>
            <DateElement
              name="DateGiven"
              setValue={setDateGiven}
              valueLabel="Дата выдачи"
            />
          </Col>
        </Row>
        <Row>
          <SelectElement
            name="PlaceBirth"
            value={placeBirth}
            setValue={setPlaceBirth}
            valueLabel="Место рождения"
            array={faculteis}
          />
        </Row>
        <Row>
          <Col>
            <SelectElement
              name="FirstCitizenship"
              value={firstCitizenship}
              setValue={setFirstCitizenship}
              valueLabel="Первое гражданство"
              array={faculteis}
            />
          </Col>
          <Col>
            <SelectElement
              name="SecondCitizenship"
              value={secondCitizenship}
              setValue={setSecondCitizenship}
              valueLabel="Второе гражданство"
              array={faculteis}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
