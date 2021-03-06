import React from 'react'
import Spinner from '../components/Spinner'
import { loadReactComponent } from '../utils/loadComponent'

const Pokemon = () => {
  const url = REMOTE_POKEMON
  const remote = 'pokemon'
  const module = './Pokemon'

  if (!remote || !url || !module) {
    return <h2>No system specified</h2>
  }

  const Component = React.lazy(
    loadReactComponent(remote, 'default', module, url)
  )
  console.log(Component)
  return (
    <React.Suspense fallback={<Spinner />}>
      <Component />
    </React.Suspense>
  )
}

export default Pokemon
