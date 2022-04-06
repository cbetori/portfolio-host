import React from 'react'
import Spinner from '../components/Spinner'
import { loadReactComponent } from '../utils/loadComponent'

const Portfolio = () => {
  const url = REMOTE_PORTFOLIO
  const remote = 'portfolio'
  const module = './Portfolio'

  if (!remote || !url || !module) {
    return <h2>No system specified</h2>
  }

  const Component = React.lazy(
    loadReactComponent(remote, 'default', module, url)
  )

  return (
    <React.Suspense fallback={<Spinner />}>
      <Component />
    </React.Suspense>
  )
}

export default Portfolio
