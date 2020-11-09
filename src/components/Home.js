import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import Button from "./Button";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  header: {
    textAlign: "center"
  }
});

class Home extends Component {
  state = { email: ""};

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    const { classes, isLoggingOut, logoutError, email } = this.props;
    
    return (
      <div className={classes.header}>
        <h1>Logged in as -</h1>
        {this.props.email}
        <br/>
        <Button primary onClick={this.handleLogout}>Logout</Button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
    email: state.auth.user.email,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Home));