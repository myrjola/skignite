import * as React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import { reducer } from './reducer'
import { fetchTasks } from './sagas'
import { fetchTalks } from './sagas'

// Create Redux store and start long polling in the background.
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(fetchTalks)

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={ store }>
        <ScrollView contentContainerStyle={styles.container}>
          <Text>Hello</Text>
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
