import React, { Component } from 'react'
import {Provider} from './Context' 

export default class ContextProvider extends Component{
  state = {
    welcome:'this is first implementation of Context API'
  }
  render() {
    return ( 
      <Provider value={this.state.welcome}>
        {this.props.children}
      </Provider>
    )
  }
}