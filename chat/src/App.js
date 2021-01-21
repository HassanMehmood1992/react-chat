import "./App.scss";
import Icon from "@mdi/react";
import { mdiAlphaZBoxOutline, mdiBoxShadow } from "@mdi/js";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import AuthPage from "./pages/auth";
import DefaultLayout from "./layouts/DefaultLayout";
import DashBoardPage from "./pages/dashboard";
import NotFoundPage from "./pages/notfound";
import { Provider } from "react-redux";
import store from "./store";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route
        path="/login"
        render={(matchProps) => (
          <AuthLayout>
            <AuthPage {...matchProps} />
          </AuthLayout>
        )}
      />
      <Route
        path="/dashboard/:userID"
        render={(matchProps) => (
          <DefaultLayout>
            <DashBoardPage {...matchProps} />
          </DefaultLayout>
        )}
      />
      {/* <Redirect from="/" to="/login" ></Redirect> */}
      <Route component={NotFoundPage}></Route>
    </Switch>
  </Router>
);

function App() {
  return (
    <div>
      {/* Welcome
      <Icon path={mdiAlphaZBoxOutline} size="38px" /> */}
      <Provider store={store}>
        <AppRouter></AppRouter>
      </Provider>
    </div>
  );
}

export default App;
