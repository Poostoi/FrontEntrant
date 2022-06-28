import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { FormatToArray } from "./function/FormatToArray";
import { NavigationPanel } from "./main-content/NavigationPanel";
import { TopPanel } from "./top-panel-content/TopPanel";
const url = "https://localhost:7019/api/";
export const App = () => {
  const [faculty, setFaculty] = useState([""]);
  const [speciality, setSpeciality] = useState([""]);
  const [language, setLanguage] = useState([""]);
  const [country, setCountry] = useState([""]);
  const [region, setRegion] = useState([""]);
  const [destrict, setDestrict] = useState([""]);
  const [place, setPlace] = useState([""]);
  const loadDate = (e: any) => {
    axios(url + "Vacancy/FindAllFaculty").then((e: any) => {
      setFaculty(FormatToArray(e.data));
    });
    axios(url + "Vacancy/FindAllSpeciality").then((e: any) => {
      setSpeciality(FormatToArray(e.data));
    });
    axios(url + "Vacancy/FindAllLanguage").then((e: any) => {
      setLanguage(FormatToArray(e.data));
    });
    axios(url + "Address/FindAllCountry").then((e: any) => {
      setCountry(FormatToArray(e.data));
    });
    axios(url + "Address/FindAllRegion").then((e: any) => {
      setRegion(FormatToArray(e.data));
    });
    axios(url + "Address/FindAllDestrict").then((e: any) => {
      setDestrict(FormatToArray(e.data));
    });
    axios(url + "Address/FindAllPlace").then((e: any) => {
      setPlace(FormatToArray(e.data));
    });
  };
  return (
    <div className="App">
      <header className="bg-dark top">
        <Container className="p-2">
          <Row className="justify-content-end">
            <Col>
              <TopPanel />
            </Col>
            <Col className="col-4">
              <Button variant="success col-12" onClick={loadDate}>
                {"Загрузить данные"}
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
      <main className="main">
        <div className="p-2 justify-content-center">
          <NavigationPanel
            faculty={faculty}
            speciality={speciality}
            language={language}
            country={country}
            region={region}
            destrict={destrict}
            place={place}
          />
        </div>
      </main>
      <footer className="footer bg-dark ">
        <a href="http://spsu.ru/">ПГУ им. Т. Г. Шевченко</a>
        <br />
        Copyright ©
      </footer>
    </div>
  );
};
