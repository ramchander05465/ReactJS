import React, { Component } from 'react'

import SecondComp from './secondComponent'

export default class FirstComponent extends Component {
  render() {
    return (
      <div>
        fisrt Component
        <SecondComp />
      </div>
    )
  }
}
