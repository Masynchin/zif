import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import NavItem from "./NavItem";
import TopicPage from "./TopicPage";
import Thread from "./Thread";
import MainPage from "./MainPage";

export default function App() {
  return (
    <Router>
      <Nav>
        <NavItem href="/">/</NavItem>
        <NavItem href="/it">IT</NavItem>
        <NavItem href="/chaos">Срач</NavItem>
        <NavItem href="/politics">Политика</NavItem>
        <NavItem href="/watch">Попузырить</NavItem>
      </Nav>

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route
          exact
          path="/:topic(it|chaos|politics|watch)"
          component={TopicPage}
        />
        <Route
          exact
          path="/:topic(it|chaos|politics|watch)/:threadId"
          component={Thread}
        />
      </Switch>
    </Router>
  );
}
