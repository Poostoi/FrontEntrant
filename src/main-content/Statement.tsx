import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { SelectElement } from "./SelectElement";

export const Statement = () => {
  const faculteis = [
    "Физико-математический",
    "Инженерно-технический",
    "Экономический",
    "dsfsd",
    "afasf",
  ];
  const [faculty, setFaculty] = useState(faculteis[0]);
  const [speciality, setSpeciality] = useState(faculteis[1]);
  const [formaEducation, setFormaEducation] = useState(faculteis[0]);
  const [languageEducation, setLanguageEducation] = useState(faculteis[0]);
  const [educationOn, setEducationOn] = useState(faculteis[0]);
  const [languageExams, setLanguageExams] = useState(faculteis[0]);
  const [officialLanguage, setOfficialLanguage] = useState(faculteis[0]);
  const [foreignLanguage, setForeignLanguage] = useState(faculteis[0]);

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
          array={faculteis}
        />
        <Row>
          <Col>
            <SelectElement
              name="FormaEducation"
              value={formaEducation}
              setValue={setFormaEducation}
              valueLabel="Форма обучения"
              array={faculteis}
            />
          </Col>

          <Col>
            <SelectElement
              name="LanguageEducation"
              value={languageEducation}
              setValue={setLanguageEducation}
              valueLabel="Язык обучения"
              array={faculteis}
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
              array={faculteis}
            />
          </Col>
          <Col>
            <SelectElement
              name="LanguageExams"
              value={languageExams}
              setValue={setLanguageExams}
              valueLabel="Вступительные экзамены на"
              array={faculteis}
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
              array={faculteis}
            />
          </Col>
          <Col>
            <SelectElement
              name="ForeignLanguage"
              value={foreignLanguage}
              setValue={setForeignLanguage}
              valueLabel="Иностранный язык"
              array={faculteis}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
