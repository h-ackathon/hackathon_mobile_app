import React from 'react';
import Router from './Routers';
import { createStore, applyMiddleware, } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { YellowBox } from 'react-native';

class App extends React.Component {
  
  render() {
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount',
      'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
      'Warning: componentWillReceiveProps',
      'Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated. Instead pass the string value "left" or "right"'
    ]);
    const store = createStore(reducers, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}


export default App;