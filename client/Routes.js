import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import AllEmotions from "./components/AllEmotions";
import SingleEmotion from "./components/SingleEmotion";
import AllUsers from "./components/AllUsers";
import Cart from "./components/Cart";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {/* islogged in should only affect the login views */}
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/users/:userId/:ordertype" component={Cart} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
          </Switch>
        )}
        {/* all users should be able to view items, regardless of loggin status */}
        <Switch>
          <Route exact path="/emotions" component={AllEmotions} />
          <Route exact path="/emotions/:emotionId" component={SingleEmotion} />
          <AllEmotions />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
