import React, { Component } from 'react'
import {Consumer} from './Context'
export default class SecondComponent extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(context) => (
            <p>{context}</p>
          )}
        </Consumer>
      </div>
    )
  }
}
