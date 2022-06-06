import axios from "axios";
import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import "./App.css";
import { TopPanel } from "./TopPanel";

export const App = () => {
  useEffect(() => {
    const url = "https://localhost:7019/api/Account";
    /* axios({
			method: 'post',
			url: url + '/Registration',
			data: {
				"login": "string1",
				"password": "string"
			}
		}).then(responce => console.log(responce));*/
    axios({
      method: "post",
      url: url + "/Login",
      data: {
        login: "string",
        password: "string",
      },
    }).then((responce) => console.log(responce));
  });
  return (
    <div className="App">
      <body>
        <header className="bg-dark">
          {" "}
          <TopPanel />
        </header>
        <main></main>
        <footer>
          <p>
            <Alert key={"dark"} variant={"dark"}>
              <a href="http://spsu.ru/">ПГУ им. Т. Г. Шевченко</a>
              <br />
              Copyright ©
            </Alert>
          </p>
        </footer>
      </body>
    </div>
  );
};
