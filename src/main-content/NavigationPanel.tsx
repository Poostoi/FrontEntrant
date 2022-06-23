import { useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { Questionary } from "./Questionary";
import { Statement } from "./Statement";

export const NavigationPanel = () => {
  const [key, setKey] = useState("statement");
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k: any) => setKey(k)}
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="statement" title="Заявление" className="tab">
          <Row className="col-12 justify-content-center">
            <Col className="col-8 ">
              <Statement />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="questionary" title="Анкета">
          <Row className="col-12 justify-content-center">
            <Col className="col-8 ">
              <Questionary />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="place-living" title="Место проживание">
          c
        </Tab>
        <Tab eventKey="passport" title="Пасспорт">
          d
        </Tab>
        <Tab eventKey="education" title="Образование">
          e
        </Tab>
        {/* <Tab eventKey="school-marks" title="Школьные оценки">
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
