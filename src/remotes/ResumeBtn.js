import React from 'react'

const ResumeBtn = () => {
  const url = REMOTE_PORTFOLIO
  const remote = 'portfolio'
  const module = './ResumeBtn'

  if (!remote || !url || !module) {
    return <h2>No system specified</h2>
  }
  const Component = React.lazy(() => import('portfolio/ResumeBtn'))
  // const Component = React.lazy(
  //   loadReactComponent(remote, 'default', module, url)
  // )

  return (
    <React.Suspense fallback={null}>
      <Component
        style={{
          border: '1px solid white',
          width: '70%',
          textAlign: 'center',
          margin: 'auto',
          padding: 10,
          cursor: 'pointer',
        }}
      />
    </React.Suspense>
  )
}

export default ResumeBtn
