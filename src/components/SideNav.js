import React from 'react'
import profile from '../../public/images/profile.png'
import { useNavigate } from 'react-router-dom'
import ResumeBtn from '../remotes/ResumeBtn'

const SideNav = () => {
  const microfrontend = [
    { title: 'Resume' },
    { title: 'Pokemon' },
    { title: 'Covid' },
    { title: 'Portfolio' },
    { title: 'Dashboard' },
    { title: 'Amazon' },
  ]

  const home = { title: 'Home' }

  const me = [
    { title: 'Github', href: 'https://github.com/cbetori' },
    { title: 'LinkedIn', href: 'https://www.linkedin.com/in/collinbetori/' },
  ]
  return (
    <div id='side-nav'>
      <div id='side-nav-wrapper'>
        <NavSection>
          <NavList list={[{ title: 'Home' }]} style={{ fontWeight: 500 }} />
        </NavSection>
        <NavSection header='Micro-Frontends'>
          <NavHead title='Micro-Frontends' />
          <NavList list={microfrontend} />
        </NavSection>
        <NavSection>
          <NavHead title={'Links'} />
          <NavList list={me} />
          <NavPic image={profile} />
        </NavSection>
        <ResumeBtn />
      </div>
    </div>
  )
}

export default SideNav

const NavSection = ({ children }) => {
  return <div className='nav-section'>{children}</div>
}

const NavHead = ({ title }) => {
  return <div className='nav-section-head'>{title}</div>
}

const NavList = ({ list, ...props }) => {
  return list.map(item => {
    return (
      <div
        key={item.title}
        style={{ display: 'flex', width: '100%', ...props.style }}>
        {item.href ? <NavUrl item={item} /> : <NavItem item={item} />}
      </div>
    )
  })
}

const NavUrl = ({ item }) => {
  return (
    <a className='nav-item' href={item.href} target='_blank'>
      {item.title}
    </a>
  )
}

const NavItem = ({ item }) => {
  let navigate = useNavigate()
  let url = item.title === 'Home' ? '/' : '/' + item.title.toLowerCase()
  return (
    <div className='nav-item' onClick={() => navigate(url, { replace: true })}>
      {item.title}
    </div>
  )
}

const NavPic = ({ image }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 0px 25px 0px',
      }}>
      <img
        src={image}
        alt='Logo'
        style={{
          height: '75px',
          borderRadius: '50%',
        }}
      />
    </div>
  )
}
