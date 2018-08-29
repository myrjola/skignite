import * as React from 'react'
import { Text } from 'react-native'

export const Error = ({ error }) => (
  error ? <Text style={ style }>{ error.message }</Text> : null
)

const style = {
  backgroundColor: 'red',
}
