import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import Home from './screens/home'
import PageDetail from './screens/page-detail'

import contents from './references/contents'

export default () => (
  <Router
    basename={process.env.PUBLIC_URL}
  >
    <Switch>
      <Route
        exact path = '/'
      >
        <Helmet>
            <title>{`${require('../package.json').name} ~ Learning With Small Steps Visually`}</title>
            <meta
                name = "description"
                content = {`Welcome to ${require('../package.json').name}, where you can learning with small steps visually}`}
            />
        </Helmet>

        <Home />
      </Route>

      {
        contents.map(content => (
          <Route
            path = {content.routeName}
            key = {content.id}
          >
            <Helmet>
              <title>{`${require('../package.json').name} | ${content.title}`}</title>
              <meta
                name = "description"
                content = {content.slides[0].description}
              />
            </Helmet>

            <PageDetail
              content = {content}
            />
          </Route>
        ))
      }
    </Switch>
  </Router>
)