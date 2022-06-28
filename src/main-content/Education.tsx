import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { DateElement } from "../function/DateElement";
import { NumberElement } from "../function/NumberElement";
import { SelectElement } from "../function/SelectElement";
import { TextElement } from "../function/TextElement";
interface IEducation {
  setCheck: (e: any) => void;
  validated: boolean;
  countries: string[];
  destricts: string[];
  regions: string[];
  places: string[];
  languages: string[];
}

export const Education = ({
  setCheck,
  validated,
  countries,
  destricts,
  regions,
  places,
  languages,
}: IEducation) => {
  const typeEducationalInstitutions = [
    "Школа",
    "Техникум",
    "Лицей",
    "Колледж",
    "Гимназия",
    "Университет",
    "Академия",
    "Институт",
    "ПТУ, ГПТУ, СПТУ",
    "Худож.училище",
    "Школа-интернат",
  ];
  const characterEducations = [
    "Среднее профес.",
    "Высшее",
    "Начальное профес.",
    "Общее полное среднее (11 кл.)",
    "Неполное высшее",
    "Основное среднее (9 кл.)",
  ];

  const [characterEducation, setCharacterEducation] = useState(
    characterEducations[0]
  );
  const [typeEducationalInstitution, setTypeEducationalInstitution] = useState(
    typeEducationalInstitutions[0]
  );
  const [nameEducationalInstitution, setNameEducationalInstitution] =
    useState("");
  const [numberEducationalInstitution, setNumberEducationalInstitution] =
    useState(0);
  const [expirationDate, setExpirationDate] = useState("");
  const [language, setLanguage] = useState(languages[0]);
  const [country, setCountry] = useState(countries[0]);
  const [region, setRegion] = useState(destricts[0]);
  const [destrict, setDestrict] = useState(regions[0]);
  const [place, setPlace] = useState(places[0]);

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
              array={characterEducations}
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
                  array={typeEducationalInstitutions}
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
              array={languages}
            />
          </Col>
          <Col>
            <SelectElement
              name="Country"
              value={country}
              setValue={setCountry}
              valueLabel="Страна"
              array={countries}
            />
            <SelectElement
              name="Region"
              value={region}
              setValue={setRegion}
              valueLabel="Район"
              array={regions}
            />
            <SelectElement
              name="Destrict"
              value={destrict}
              setValue={setDestrict}
              valueLabel="Область"
              array={destricts}
            />
            <SelectElement
              name="Place"
              value={place}
              setValue={setPlace}
              valueLabel="Место"
              array={places}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
