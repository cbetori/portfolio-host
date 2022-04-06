import React from 'react'
import Spinner from '../components/Spinner'
import { loadReactComponent } from '../utils/loadComponent'

const Covid = () => {
  const url = REMOTE_COVID
  const remote = 'covid'
  const module = './Covid'

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

export default Covid
