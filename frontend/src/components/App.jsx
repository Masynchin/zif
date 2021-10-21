import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import NavItem from "./NavItem";
import TopicPage from "./TopicPage";
import Thread from "./Thread";

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
        <Route
          path="/:topic(it|chaos|politics|watch)/:threadId"
          children={<Thread />}
        />
        <Route
          path="/:topic(it|chaos|politics|watch)"
          children={<TopicPage />}
        />
      </Switch>
    </Router>
  );
}
