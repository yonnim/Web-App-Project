import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Header from "Components/Header"
import { connect } from "react-redux"
import { notifications } from "../../actions/index"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"
import Snackbar from "Containers/Snackbar"

class App extends React.Component {
  constructor(props) {
    super(props)

    notifications.connectToNotifications(props.dispatch)
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="ldc-app">
          <Header />
          <main>{this.props.children}</main>
          <Snackbar />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect()(App)
