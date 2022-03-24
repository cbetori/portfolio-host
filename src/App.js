import React from 'react'
import ReactDOM from 'react-dom'
import { Wrapper } from './components/Wrapper'

export const App = () => {
  return <Wrapper />
}

ReactDOM.render(<App />, document.getElementById('app'))
