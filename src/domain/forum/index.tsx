import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import { withAuthentication } from '../../utils/guards/withAuthentication';
import ForumSemesters from './forum-semesters';
import ForumHeader from './forum-header';
import ForumPost from './forum-post';
import ForumProvider from './reducer';

export default function Forum(props) {
  return (
    <Container>
      <ForumProvider>
        <div className="py-5">
          <ForumHeader></ForumHeader>
        </div>
        <Switch>
          <Route
            path={`${props.match.path}/post/:id`}
            component={withAuthentication(ForumPost)} />
          <Route
            path={`${props.match.path}/`} exact
            component={withAuthentication(ForumSemesters)} />
          <Route component={withAuthentication(ForumSemesters)} />
        </Switch>
      </ForumProvider>
    </Container>
  );
}
