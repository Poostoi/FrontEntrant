import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { DateElement } from "../function/DateElement";
import { SelectElement } from "../function/SelectElement";
import { TextElement } from "../function/TextElement";
interface IPassport {
  setCheck: (e: any) => void;
  validated: boolean;
  place: string[];
  country: string[];
}
export const Passport = ({
  setCheck,
  validated,
  place,
  country,
}: IPassport) => {
  const [serialPassport, setSerialPassport] = useState("");
  const [placeGiven, setPlaceGiven] = useState(place[0]);
  const [issuedBy, setIssuedBy] = useState("");
  const [dateGiven, setDateGiven] = useState("2022-01-02");
  const [placeBirth, setPlaceBirth] = useState(place[0]);
  const [firstCitizenship, setFirstCitizenship] = useState(country[0]);
  const [secondCitizenship, setSecondCitizenship] = useState(country[0]);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
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
              array={place}
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
            array={place}
          />
        </Row>
        <Row>
          <Col>
            <SelectElement
              name="FirstCitizenship"
              value={firstCitizenship}
              setValue={setFirstCitizenship}
              valueLabel="Первое гражданство"
              array={country}
            />
          </Col>
          <Col>
            <SelectElement
              name="SecondCitizenship"
              value={secondCitizenship}
              setValue={setSecondCitizenship}
              valueLabel="Второе гражданство"
              array={country}
            />
          </Col>
        </Row>
        <Button type="submit" variant="primary">
          Отправить
        </Button>
      </Form>
    </>
  );
};
