import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { MethodAxios } from "../function/MethodAxios";
import { SelectElement } from "../function/SelectElement";
const url = "https://localhost:7019/api/";
interface IStatement {
  setCheck: (e: any) => void;
  validated: boolean;
  faculteis: string[];
  specialiteis: string[];
  language: string[];
}
interface Data {
  country: string[];
}
export const Statement = ({
  setCheck,
  validated,
  faculteis,
  specialiteis,
  language,
}: IStatement) => {
  const form = ["", "очная", "заочная"];
  const educationOns = ["", "бюджете", "договоре"];

  const [faculty, setFaculty] = useState(faculteis[0]);
  const [speciality, setSpeciality] = useState(specialiteis[0]);
  const [formaEducation, setFormaEducation] = useState(form[0]);
  const [languageEducation, setLanguageEducation] = useState(language[0]);
  const [educationOn, setEducationOn] = useState(educationOns[0]);
  const [languageExams, setLanguageExams] = useState(language[0]);
  const [officialLanguage, setOfficialLanguage] = useState(language[0]);
  const [foreignLanguage, setForeignLanguage] = useState(language[0]);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setCheck(false);
    } else {
      submit();
      setCheck(true);
    }
  };
  const submit = () => {
    MethodAxios({
      method: "post",
      urlMethod: "Account/Login",
      data: {
        faculty: faculty,
        speciality: speciality,
        formaEducation: formaEducation,
        languageEducation: languageEducation,
        educationOn: educationOn,
        languageExams: languageExams,
        officialLanguage: officialLanguage,
        foreignLanguage: foreignLanguage,
      },
    });
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
  useEffect(() => {});
  return (
    <>
      <Form
        noValidate
        validated={validated}
        onChange={change}
        onSubmit={handleSubmit}
        id="FormStatement"
      >
        <SelectElement
          name="Faculty"
          value={faculty}
          setValue={setFaculty}
          valueLabel="Факультет"
          array={faculteis}
        />
        <SelectElement
          name="Speciality"
          value={speciality}
          setValue={setSpeciality}
          valueLabel="Специальность"
          array={specialiteis}
        />
        <Row>
          <Col>
            <SelectElement
              name="FormaEducation"
              value={formaEducation}
              setValue={setFormaEducation}
              valueLabel="Форма обучения"
              array={form}
            />
          </Col>

          <Col>
            <SelectElement
              name="LanguageEducation"
              value={languageEducation}
              setValue={setLanguageEducation}
              valueLabel="Язык обучения"
              array={language}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SelectElement
              name="EducationOn"
              value={educationOn}
              setValue={setEducationOn}
              valueLabel="Обучение на"
              array={educationOns}
            />
          </Col>
          <Col>
            <SelectElement
              name="LanguageExams"
              value={languageExams}
              setValue={setLanguageExams}
              valueLabel="Вступительные экзамены на"
              array={language}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SelectElement
              name="OfficialLanguage"
              value={officialLanguage}
              setValue={setOfficialLanguage}
              valueLabel="Официфльный язык"
              array={language}
            />
          </Col>
          <Col>
            <SelectElement
              name="ForeignLanguage"
              value={foreignLanguage}
              setValue={setForeignLanguage}
              valueLabel="Иностранный язык"
              array={language}
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
