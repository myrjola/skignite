import { connect } from 'react-redux'

import { Error } from './Error'

const mapStateToProps = ({ error }) => ({
  error
})
​
export const ErrorContainer = connect(mapStateToProps)(Error)
