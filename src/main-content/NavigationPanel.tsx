import { useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { Address } from "./Address";
import { Education } from "./Education";
import { Passport } from "./Passport";
import { Questionary } from "./Questionary";
import { Statement } from "./Statement";
interface IArrayDate {
  faculty: string[];
  speciality: string[];
  language: string[];
  country: string[];
  region: string[];
  destrict: string[];
  place: string[];
}
export const NavigationPanel = ({
  faculty,
  speciality,
  language,
  country,
  region,
  destrict,
  place,
}: IArrayDate) => {
  const [key, setKey] = useState("statement");
  const [validatedStat, setValidatedStat] = useState(false);
  const [validatedQuest, setValidatedQuest] = useState(false);
  const [validatedPass, setValidatedPass] = useState(false);
  const [validatedEduc, setValidatedEduc] = useState(false);
  const [validatedAdd, setValidatedAdd] = useState(false);

  const [validatedStatement, setValidatedStatement] = useState(false);
  const [validatedQuestionary, setValidatedQuestionary] = useState(false);
  const [validatedPassport, setValidatedPassport] = useState(false);
  const [validatedEducation, setValidatedEducation] = useState(false);
  const [validatedAddress, setValidatedAddress] = useState(false);
  const goToTab = (k: any) => {
    if (key === "statement") {
      setValidatedStat(validatedStatement ? false : true);

      if (validatedStatement) setKey(k);
    }

    if (key === "questionary" && validatedQuestionary === true) {
      setKey(k);
      setValidatedQuest(false);
    } else if (key === "questionary" && validatedQuest === false)
      setValidatedQuest(true);

    if (key === "place-living") {
      if (validatedAddress) setKey(k);
      setValidatedAdd(validatedAddress ? false : true);
    }

    if (key === "passport" && validatedPassport === true) {
      setKey(k);
      setValidatedPass(false);
    } else if (key === "passport" && validatedPass === false)
      setValidatedPass(true);

    if (key === "education" && validatedEducation === true) {
      setKey(k);
      setValidatedEduc(false);
    } else if (key === "education" && validatedEduc === false)
      setValidatedEduc(true);
  };
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={goToTab}
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="statement" title="Заявление" className="tab">
          <Row className="col-12 justify-content-center">
            <Col className="col-8 ">
              <Statement
                faculteis={faculty}
                specialiteis={speciality}
                language={language}
                validated={validatedStat}
                setCheck={setValidatedStatement}
              />
            </Col>
          </Row>
        </Tab>
				<Tab eventKey="place-living" title="Место проживания">
          <Row className="col-12 justify-content-center">
            <Col className="col-8 ">
              <Address
                countries={country}
                destricts={destrict}
                regions={region}
                places={place}
                validated={validatedAdd}
                setCheck={setValidatedAddress}
              />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="questionary" title="Анкета">
          <Row className="col-12 justify-content-center">
            <Col className="col-8 ">
              <Questionary
                validated={validatedQuest}
                setCheck={setValidatedQuestionary}
              />
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="passport" title="Паспорт">
          <Row className="col-12 justify-content-center">
            <Col className="col-8 ">
              <Passport
                place={place}
                country={country}
                validated={validatedPass}
                setCheck={setValidatedPassport}
              />
            </Col>
          </Row>
        </Tab>
				<Tab eventKey="education" title="Образование">
          <Row className="col-12 justify-content-center">
            <Col className="col-8 ">
              <Education
                countries={country}
                destricts={destrict}
                regions={region}
                places={place}
                languages={language}
                validated={validatedEduc}
                setCheck={setValidatedEducation}
              />
            </Col>
          </Row>
        </Tab>

        {/*
				
				
				<Tab eventKey="school-marks" title="Школьные оценки">
          На данный момент в разработке
        </Tab>
        <Tab eventKey="documents" title="Документы">
          На данный момент в разработке
        </Tab>
        <Tab eventKey="сertificates" title="Сертификаты">
          На данный момент в разработке
        </Tab>
        <Tab eventKey="admin" title="Администратор">
          На данный момент в разработке
        </Tab>
        <Tab eventKey="oral-exams" title="Школьные оценки">
          На данный момент в разработке
        </Tab>
        <Tab eventKey="reports" title="Отчеты">
          На данный момент в разработке
        </Tab> */}
      </Tabs>
    </>
  );
};
