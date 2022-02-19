import React, { useEffect } from 'react';
import reactDom from 'react-dom';
// router
import {
  Switch, Route, Redirect, useHistory,
} from 'react-router-dom';
// pages
import {
  Home, Movie, NotFound, Saved,
} from '..';
// components
import { NavBar } from '../../components';
// style
import {
  Container, Aside, CentralContent, Content,
} from './style';

export default function Main() {
  const history = useHistory();
  // function to use the hook.
  function handleRegisterPress(name) {
    // using the hook with the page link.
    history.push(`/${name}`);
  }
  return (
    <Container>
      <Aside />
      <CentralContent>
        <NavBar
          onClick={(name) => handleRegisterPress(name)}
        />
        <Content>
          <Switch>
            <Redirect from="/Home" to="/" />
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/saved"
              component={Saved}
            />
            <Route
              exact
              path="/filme/:id"
              component={Movie}
            />
            <Route
              path="*"
              component={NotFound}
            />
          </Switch>
        </Content>
      </CentralContent>
    </Container>
  );
}
