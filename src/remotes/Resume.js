import React from 'react'
import { Resume as _Resume } from 'resume/Resume'

export const Resume = () => {
  // _Resume({
  //   props: { style: 'border-radius: 5px' },
  //   target: document.getElementById('resume'),
  // })
  window.resume.get('./Resume').then(module => {
    const Resume = module().default
    new Resume({
      props: { style: 'border-radius: 5px' },
      target: document.getElementById('resume'),
    })
  })

  return <div id='resume' style={{ height: '100%', borderRadius: 5 }} />
}
