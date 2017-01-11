
import req from 'superagent';
import { Actions as NavigationActions } from 'react-native-router-flux';

export const reportEvent = (newEvent) => {
  return {
    type: 'REPORT_EVENT',
    newEvent,
  };
};
export const updatePosition = (position) => {
  return {
    type: 'UPDATE_POSITION',
    userLocation: {
      region:  {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01

      },
      currentLocation: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    }
  }
}
// !!! this is duplicate !!!
export const loadEvents = (events) => {
  return {
    type: 'UPDATE_EVENTS',
    events
  }
};
export const updateEvent = (events) => {
  return {
    type: 'UPDATE_EVENTS',
    events
  }
};
export const fetchEvents = (token) => {
  return {
    type: 'FETCH_EVENTS',
    token
  }
}
const getUserInfo = (userName = '', userInterests = [], token = {}) => {
  return {
    type: 'GET_USER_INFO',
    userName,
    userInterests,
    token
  }
};

const getEvents = (userInterests) => {

}
/* ------------- Types and Action Creators ------------- */
export const request = () => ({
  type: 'REQUEST',
});

export const loginSuccess = (username, token) => {
  console.log(token);
  NavigationActions.mapview();
  return {
    type: 'SUCCESS',
    username,
    token,
  }

};

export const authFail = error => ({
  type: 'AUTH_FAIL',
  error,
});

export const loginRequest = (username, password) => ({
  type: 'LOGIN_REQUEST',
  username,
  password
})

export const registerRequest = (username, password) => ({
  type: 'SIGNUP_REQUEST',
  username,
  password
})
export const loginRequest_ = (username, password) => {
  return (dispatch) => {
    dispatch(request);
    const url = 'http://127.0.0.1:8099';
    return req.post(url.concat('/api/auth/login'))
      .send({ username, password })
      .end((err, res) => {
        if (err) { throw err; }
         // change state to loginSuccess / failure
        const token = res.body;
        console.log(token);
        if (token) {
          NavigationActions.mapview();
          return dispatch(loginSuccess(username, token));
        } else {
          const error = res.text;
          return dispatch(authFail(error));
        }
      });
  };
};

// REFACTOR: Below code is almost DUPLICATE.
// Finalize the signin / signup endpoints then refactor

export const registerRequest_ = (username, password) => {
  return (dispatch) => {
    dispatch(request);
    const url = 'http://127.0.0.1:8099';
    return req.post(url.concat('/api/auth/register'))
      .send({
        username,
        password,
        firstName: 'John',
        lastName: 'Appleseed',
      })
      .end((err, res) => {
        if (err) { throw err; }
        const token = res.body;
        console.log(token);
         // change state to success / failure
        if (token) {
          return dispatch(loginSuccess(username, token));
        } else {
          const error = res.text;
          return dispatch(authFail(error));
        }
      });
  };
};
