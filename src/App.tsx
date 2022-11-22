import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loginClient } from "./clients/graphql";
import { LoginPage, DashboardPage } from "./pages";

function App() {
  return (
    <ApolloProvider client={loginClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/dashboard">
            <DashboardPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
