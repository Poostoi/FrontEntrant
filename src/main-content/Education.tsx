import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { DateElement } from "../function/DateElement";
import { NumberElement } from "../function/NumberElement";
import { SelectElement } from "../function/SelectElement";
import { TextElement } from "../function/TextElement";
interface IEducation {
  setCheck: (e: any) => void;
  validated: boolean;
}
export const Education = ({ setCheck, validated }: IEducation) => {
  const gender = ["Мужской", "Женский"];
  const languages = ["Русский"];
  const [characterEducation, setCharacterEducation] = useState(gender[0]);
  const [typeEducationalInstitution, setTypeEducationalInstitution] = useState(
    gender[0]
  );
  const [nameEducationalInstitution, setNameEducationalInstitution] =
    useState("");
  const [numberEducationalInstitution, setNumberEducationalInstitution] =
    useState(1);
  const [expirationDate, setExpirationDate] = useState("");
  const [language, setLanguage] = useState(languages[0]);
  const [country, setCountry] = useState(gender[0]);
  const [region, setRegion] = useState(gender[0]);
  const [destrict, setDestrict] = useState(gender[0]);
  const [place, setPlace] = useState(gender[0]);

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
        id="formEducation"
      >
        <Row>
          <Col>
            <SelectElement
              name="CharacterEducation"
              value={characterEducation}
              setValue={setCharacterEducation}
              valueLabel="Тип образования"
              array={gender}
            />
            <TextElement
              name="NameEducationalInstitution"
              value={nameEducationalInstitution}
              setValue={setNameEducationalInstitution}
              valueLabel="Наименование учебного заведения"
            />
            <Row>
              <Col>
                <NumberElement
                  name="NumberEducationalInstitution"
                  value={numberEducationalInstitution}
                  classNumber=""
                  setValue={setNumberEducationalInstitution}
                  valueLabel="Номер уч. заведения"
                  minNumber={0}
                  maxNumber={1000}
                />
              </Col>
              <Col>
                <SelectElement
                  name="TypeEducationalInstitution"
                  value={typeEducationalInstitution}
                  setValue={setTypeEducationalInstitution}
                  valueLabel="Тип уч. заведения"
                  array={gender}
                />
              </Col>
            </Row>
            <DateElement
              name="ExpirationDate"
              setValue={setExpirationDate}
              valueLabel="Дата окончания"
            />

            <SelectElement
              name="Language"
              value={language}
              setValue={setLanguage}
              valueLabel="Язык обучения"
              array={gender}
            />
          </Col>
          <Col>
            <SelectElement
              name="Country"
              value={country}
              setValue={setCountry}
              valueLabel="Страна"
              array={gender}
            />
            <SelectElement
              name="Region"
              value={region}
              setValue={setRegion}
              valueLabel="Район"
              array={gender}
            />
            <SelectElement
              name="Destrict"
              value={destrict}
              setValue={setDestrict}
              valueLabel="Область"
              array={gender}
            />
            <SelectElement
              name="Place"
              value={place}
              setValue={setPlace}
              valueLabel="Место"
              array={gender}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
