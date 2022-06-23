import "./App.css";
import { NavigationPanel } from "./main-content/NavigationPanel";
import { TopPanel } from "./top-panel-content/TopPanel";

export const App = () => {
  return (
    <div className="App">
      <body>
        <header className="bg-dark top">
          <TopPanel />
        </header>
        <main className="main">
          <div className="p-2 justify-content-center">
            <NavigationPanel />
          </div>
        </main>
        <footer className="footer bg-dark ">
          <a href="http://spsu.ru/">ПГУ им. Т. Г. Шевченко</a>
          <br />
          Copyright ©
        </footer>
      </body>
    </div>
  );
};
