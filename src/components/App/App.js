import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from '../routes/Home'
import Home2 from '../routes/Home2'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import ItemIndex from '../ItemCrud/ItemIndex'
import ItemCreate from '../ItemCrud/ItemCreate'
import ItemShow from '../ItemCrud/ItemShow'
import ItemEdit from '../ItemCrud/ItemEdit'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          { /* ----------------------- Begin Item Routes ------- */ }
          <AuthenticatedRoute user={user} exact path='/items' render={({ match }) => (
            <ItemIndex match={match} msgAlert={this.msgAlert} user={user} />
          )} />
          <Route exact path='/' component={Home} user={user} />
          <AuthenticatedRoute user={user} path='/items-create' render={({ match }) => (
            <ItemCreate match={match} msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path="/items/:id" render={({ match }) => (
            <ItemShow msgAlert={this.msgAlert} user={user} match={match} />
          )}/>
          <AuthenticatedRoute user={user} exact path='/items/:id/edit' render={({ match }) => (
            <ItemEdit match={match} msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/home2' render={({ match }) => (
            <Home2 match={match} msgAlert={this.msgAlert} user={user} />
          )} />

        </main>
      </Fragment>
    )
  }
}

export default App
