import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Nav from "./components/Nav";
import NavItem from "./components/NavItem";
import MainPage from "./pages/MainPage";
import TopicPage from "./pages/TopicPage";
import ThreadPage from "./pages/ThreadPage";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav>
          <NavItem to="/">/</NavItem>
          <NavItem to="/it">IT</NavItem>
          <NavItem to="/chaos">Срач</NavItem>
          <NavItem to="/politics">Политика</NavItem>
          <NavItem to="/watch">Попузырить</NavItem>
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
            component={ThreadPage}
          />
        </Switch>
      </Router>
    </Provider>
  );
}
