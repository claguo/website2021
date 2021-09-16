import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";



import { Home, ProjectPg, ScrollToTop, About } from "./components";



function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={About} />
          <Route path="/projects/:id" exact component={ProjectPg} />
          {/* <Route path="/Project" component={Projects} /> */}

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
