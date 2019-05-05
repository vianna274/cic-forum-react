import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import { withAuthentication } from '../../utils/guards/withAuthentication';
import ForumPost from './forum-post';
import ForumSemesters from './forum-semesters';
import ForumCreatePost from './forum-create-post';

function ForumRouter(props) {
  return (
    <Switch>
      <Route
        path={`${props.match.path}/`} exact
        component={withAuthentication(ForumSemesters)} />
      <Route
        path={`${props.match.path}/post/:id`}
        component={withAuthentication(ForumPost)} />
      <Route
        path={`${props.match.path}/create-post`} exact
        component={withAuthentication(ForumCreatePost)} />
      <Route component={withAuthentication(ForumSemesters)} />
    </Switch>
  );
}

export default withRouter(ForumRouter);
