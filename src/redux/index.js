import React from 'react'
import ReactDOM from 'react-dom'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducer'
import Dimmer from './dimmer'

class Index extends React.Component {

  render() {

    const loggerMiddleware = createLogger()

    const createStoreWithMiddleware = applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )(createStore)

    const store = createStoreWithMiddleware(reducer)

    return (
      <Provider store={store}>
        <Dimmer {...this.props} />
      </Provider>
    )
  }

}

ReactDOM.render(<Index />, document.getElementById('app'))
