import React from "react"
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import {Switch, Route} from "react-router-dom"
import { connect } from "react-redux"

function App() {
  const access_token =window.localStorage.getItem("access_token")

  return (
      <Switch>
          <Route exact path= "/">
              {access_token ? <Dashboard /> : <Login />}
          </Route>
          <Route  path= "/login">
              {access_token ? <Dashboard /> : <Login />}
          </Route>
      </Switch>
  );
}

const mapStateToProps = state =>{
  const {userState} = state
  const { newUser } = userState
  return {
      newUser: newUser
  }
}

export default connect(mapStateToProps, null)(App)
