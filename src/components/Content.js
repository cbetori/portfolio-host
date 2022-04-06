import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from './Home'
import Covid from '../remotes/Covid'
import Pokemon from '../remotes/Pokemon'
import Dashboard from '../remotes/Dashboard'
import Resume from '../remotes/Resume'
import Amazon from '../remotes/Amazon'
import Portfolio from '../remotes/Portfolio'

const Content = () => {
  let location = useLocation()
  const [system, setSystem] = React.useState(Home)
  useEffect(() => {
    if (location.pathname === '/') {
      setSystem(Home)
    }
    if (location.pathname === '/pokemon') {
      setSystem(Pokemon)
    }
    if (location.pathname === '/covid') {
      setSystem(Covid)
    }
    if (location.pathname === '/dashboard') {
      setSystem(Dashboard)
    }
    if (location.pathname === '/resume') {
      setSystem(Resume)
    }
    if (location.pathname === '/amazon') {
      setSystem(Amazon)
    }
    if (location.pathname === '/portfolio') {
      setSystem(Portfolio)
    }
  }, [location])

  return (
    <div className='content'>
      <div className='content-child'>{system}</div>
    </div>
  )
}

export default Content
