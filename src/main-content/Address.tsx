import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { NumberElement } from "../function/NumberElement";
import { SelectElement } from "../function/SelectElement";
import { TextElement } from "../function/TextElement";
interface IAddress {
  setCheck: (e: any) => void;
  validated: boolean;
}
export const Address = ({ setCheck, validated }: IAddress) => {
  const faculteis = [
    "Физико-математический",
    "Инженерно-технический",
    "Экономический",
    "dsfsd",
    "afasf",
  ];
  const visible = ["visible", "invisible"];
  const [country, setCountry] = useState(faculteis[0]);
  const [region, setRegion] = useState(faculteis[1]);
  const [destrict, setDestrict] = useState(faculteis[0]);
  const [place, setPlace] = useState(faculteis[0]);
  const [street, setStreet] = useState("");
  const [numberHome, setNumberHome] = useState(1);
  const [isApartament, setIsApartament] = useState(false);
  const [homeTelephone, setHomeTelephone] = useState(0);
  const [visibleUnvisible, setVisibleUnvisible] = useState(visible[1]);
  const [floor, setFloor] = useState(0);
  const [numberApartament, setNumberApartament] = useState(0);

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
        onChange={change}
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row>
          <Col>
            <SelectElement
              name="Country"
              value={country}
              setValue={setCountry}
              valueLabel="Страна"
              array={faculteis}
            />

            <SelectElement
              name="Region"
              value={region}
              setValue={setRegion}
              valueLabel="Область"
              array={faculteis}
            />
            <SelectElement
              name="Destrict"
              value={destrict}
              setValue={setDestrict}
              valueLabel="Район"
              array={faculteis}
            />
            <SelectElement
              name="Place"
              value={place}
              setValue={setPlace}
              valueLabel="Место"
              array={faculteis}
            />
          </Col>
          <Col>
            <TextElement
              name="Street"
              value={street}
              setValue={setStreet}
              valueLabel="Улица"
            />
            <NumberElement
              name="NumberHome"
              value={numberHome}
              setValue={setNumberHome}
              classNumber=""
              valueLabel="Номер дома"
              minNumber={0}
              maxNumber={1000}
            />
            <NumberElement
              name="HomeTelephone"
              value={homeTelephone}
              setValue={setHomeTelephone}
              classNumber=""
              valueLabel="Домашний телефон"
              minNumber={0}
              maxNumber={99999999}
            />
            <Form.Check
              type={"checkbox"}
              id={`checkbox-hostel`}
              label={`Квартира`}
              onChange={() => {
                setIsApartament(!isApartament);
                let vis = !isApartament ? visible[0] : visible[1];
                setVisibleUnvisible(vis);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NumberElement
              name="Floor"
              value={floor}
              classNumber={visibleUnvisible}
              setValue={setFloor}
              valueLabel="Этаж"
              minNumber={0}
              maxNumber={1000}
            />
          </Col>
          <Col>
            <NumberElement
              name="NumberApartament"
              value={numberApartament}
              classNumber={visibleUnvisible}
              setValue={setNumberApartament}
              valueLabel="Номер квартиры"
              minNumber={0}
              maxNumber={1000}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
