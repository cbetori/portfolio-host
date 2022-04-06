import React from 'react'
import { loadSveltComponent } from '../utils/loadComponent'

const Resume = () => {
  const url = REMOTE_RESUME
  const remote = 'resume'
  const module = './Resume'

  const loadModule = async () => {
    await loadSveltComponent(remote, 'default', module, url)
    window.resume.get(module).then(module => {
      const Resume = module().default
      new Resume({
        target: document.getElementById('resume'),
      })
    })
  }

  loadModule()

  return <div id='resume' style={{ height: '100%' }} />
}

export default Resume
