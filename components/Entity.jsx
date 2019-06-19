import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../store/helpers'

const Entity = props => {
  return (
    <div>enemy</div>
  )

}

export default connect(mapStateToProps)(Entity)