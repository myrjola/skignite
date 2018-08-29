import * as React from 'react'
import { Text } from 'react-native'

export const Talks = ({ talks }) => (
  <React.Fragment>
    { talks.map((talk, index) => <Text key={ index }>{talk.title}</Text>) }
  </React.Fragment>
)
