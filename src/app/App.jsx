import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import LandingPage from "../features/landing/LandingPage";
import NavBar from "../features/navigation/NavBar";
import Sandbox from "../features/sandbox/Sandbox";

const version = process.env.REACT_APP_VERSION;

function App() {
  return (
    <Fragment>
      <Route
        path={"/(.*)"}
        render={() => (
          <Fragment>
            <NavBar version={version} />
            <Container className='main' fluid>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/sandbox' component={Sandbox} />
            </Container>
          </Fragment>
        )}
      ></Route>
    </Fragment>
  );
}

export default App;
