import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './screens/home'
import PageDetail from './screens/page-detail'

import contents from './references/contents'

export default () => (
  <Router>
    <Switch>
      <Route
        exact path = '/'
      >
        <Home />
      </Route>

      {
        contents.map(content => (
          <Route
            path = {content.routeName}
            key = {content.id}
          >
            <PageDetail
              content = {content}
            />
          </Route>
        ))
      }
    </Switch>
  </Router>
)