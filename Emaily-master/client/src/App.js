import React, {Component} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { connect } from 'react-redux'
import fetchUser from "./redux/actions"


import Header from "./components/Header/Header"
import Landing from "./components/Landing/Landing"
import Dashboard from "./components/Dashboard/Dashboard"
import SurveyNew from "./components/SurverNew/SurveyNew"


class App extends Component
{
    componentDidMount(){
        this.props.fetchUser()
    }
   render(){
        return(
        <div className="container">
            <Router >
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route exact path="/surveys">
                        <Dashboard />
                    </Route>
                    <Route path="/surveys/new">
                        <SurveyNew />
                    </Route>
                </Switch>
            </Router>
        </div>
        )
   }
}

export default connect(null,{fetchUser})(App)