import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import { withAuthentication } from '../../utils/guards/withAuthentication';
import ForumPost from './forum-post';
import ForumCategories from './forum-categories';
import ForumCreatePost from './forum-create-post';
import ForumCategory from './forum-category';

function ForumRouter(props) {
  return (
    <Switch>
      <Route
        path={`${props.match.path}/`} exact
        component={withAuthentication(ForumCategories)} />
      <Route
        path={`${props.match.path}/category/:id`} exact
        component={withAuthentication(ForumCategory)} />
      <Route
        path={`${props.match.path}/post/:id`}
        component={withAuthentication(ForumPost)} />
      <Route
        path={`${props.match.path}/create-post`} exact
        component={withAuthentication(ForumCreatePost)} />
      <Route component={withAuthentication(ForumCategories)} />
    </Switch>
  );
}

export default withRouter(ForumRouter);
