import React, { useState } from 'react'
import { Header } from './Header'
import { SideNav } from './SideNav'
import { Home } from './Home'
import Pokemon from 'pokemon/Pokemon'
import Covid from 'covid/Covid'
import Portfolio from 'portfolio/Portfolio'
import Dashboard from 'dashboard/Dashboard'
import { Resume } from '../remotes/Resume'

export const Wrapper = () => {
  const [currentApp, setCurrentApp] = useState('Dashboard')
  console.log(currentApp)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'whitesmoke',
      }}>
      {/* <div style={{ width: '100%' }}>
        <Header />
      </div> */}
      <div
        style={{
          display: 'flex',
          borderRadius: 5,
          padding: 10,
          width: '100%',
          height: '100%',
          padding: '50px 50px 50px 50px',
          backgroundColor: 'whitesmoke',
          overflow: 'hidden',
        }}>
        <SideNav currentApp={currentApp} setCurrentApp={setCurrentApp} />

        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            backgroundColor: 'whitesmoke',
          }}>
          <div
            style={{
              flexGrow: 1,
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            {currentApp === 'Home' ? <Home /> : null}
            {currentApp === 'Resume' ? <Resume /> : null}
            {currentApp === 'Pokemon' ? <Pokemon /> : null}
            {currentApp === 'Covid' ? <Covid /> : null}
            {currentApp === 'Portfolio' ? <Portfolio /> : null}
            {currentApp === 'Dashboard' ? <Dashboard /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
