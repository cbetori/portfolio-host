import React from 'react'
import profile from '../../public/images/profile.png'

export const SideNav = ({ currentApp, setCurrentApp }) => {
  const microfrontend = [
    { title: 'Resume' },
    { title: 'Pokemon' },
    { title: 'Covid' },
    { title: 'Portfolio' },
    { title: 'Dashboard' },
  ]

  const home = [{ title: 'Home' }]

  const me = [
    { title: 'Github', href: 'https://github.com/cbetori' },
    { title: 'LinkedIn', href: 'https://www.linkedin.com/in/collinbetori/' },
  ]
  return (
    <div id='side-nav' style={{}}>
      <NavSection header='' list={home} setCurrentApp={setCurrentApp} />
      <NavSection
        header='Micro-Frontends'
        list={microfrontend}
        setCurrentApp={setCurrentApp}
      />
      <NavSection
        header='Links'
        list={me}
        setCurrentApp={setCurrentApp}
        image={profile}
      />
    </div>
  )
}

const NavSection = ({ header, list, setCurrentApp, image }) => {
  const isBold = () => {
    if (list.length === 1) {
      return { fontWeight: 500 }
    }
  }
  return (
    <div className='nav-section' style={isBold()}>
      <div className='nav-section-head'>{header}</div>
      <NavList list={list} setCurrentApp={setCurrentApp} />
      {image ? <NavPic image={image} /> : null}
    </div>
  )
}

const NavList = ({ list, setCurrentApp }) => {
  return list.map(item => {
    return (
      <div key={item.title} style={{ display: 'flex', width: '100%' }}>
        {item.href ? (
          <NavUrl item={item} />
        ) : (
          <NavItem item={item} setCurrentApp={setCurrentApp} />
        )}
      </div>
    )
  })
}

const NavUrl = ({ item }) => {
  return (
    <div>
      <a className='nav-item' href={item.href} target='_blank'>
        {item.title}
      </a>
    </div>
  )
}

const NavItem = ({ item, setCurrentApp }) => {
  return (
    <div className='nav-item' onClick={() => setCurrentApp(item.title)}>
      <div>{item.title}</div>
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
          border: '1px solid grey',
        }}
      />
    </div>
  )
}
