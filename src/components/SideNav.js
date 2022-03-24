import React from 'react'

export const SideNav = ({ currentApp, setCurrentApp }) => {
  const list = [
    { title: 'Home' },
    { title: 'Resume' },
    { title: 'Pokemon' },
    { title: 'Covid' },
  ]
  return (
    <div
      style={{
        height: '100%',
        width: 'auto',
        padding: '100px 50px 0px 30px',
      }}>
      <NavList list={list} setCurrentApp={setCurrentApp} />
    </div>
  )
}

const NavList = ({ list, setCurrentApp }) => {
  const test = list.map(item => {
    return (
      <div key={item.title} style={{ display: 'flex' }}>
        <NavItem item={item} setCurrentApp={setCurrentApp} />
      </div>
    )
  })

  return test
}

const NavItem = ({ item, setCurrentApp }) => {
  return (
    <button
      onClick={() => setCurrentApp(item.title)}
      style={{ fontWeight: 'bold', paddingBottom: 10 }}>
      {item.title}
    </button>
  )
}
