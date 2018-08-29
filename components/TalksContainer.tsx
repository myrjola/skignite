import { connect } from 'react-redux'

import { Talks } from './Talks'

const mapStateToProps = ({ talks = [] }) => ({
  talks
})
​
export const TalksContainer = connect(mapStateToProps)(Talks)
