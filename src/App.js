import React from 'react'
import ReactDOM from 'react-dom'
import { Wrapper } from './components/Wrapper'
import './styles/app.css'

export const App = () => {
  return <Wrapper />
}

ReactDOM.render(<App />, document.getElementById('app'))
