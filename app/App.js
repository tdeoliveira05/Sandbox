import React from 'react'
import Sandbox from './containers/Sandbox.js'


export default class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {}
	}

  render() {
    return (
      <div>
        <Sandbox />
      </div>
    )
  }
}
