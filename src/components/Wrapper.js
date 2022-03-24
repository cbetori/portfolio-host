import React, { useState } from 'react'
import { Header } from './Header'
import { SideNav } from './SideNav'
import { Home } from './Home'
import { Resume } from '../remotes/Resume'
import Pokemon from 'pokemon/Pokemon'
import Covid from 'covid/Covid'

export const Wrapper = () => {
  const [currentApp, setCurrentApp] = useState('Home')
  console.log(currentApp)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        padding: 50,
        backgroundColor: 'lightgrey',
      }}>
      <div
        style={{
          display: 'flex',
          borderRadius: 5,
          backgroundColor: 'white',
          padding: 10,
          width: '100%',
        }}>
        <SideNav currentApp={currentApp} setCurrentApp={setCurrentApp} />

        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            overflow: 'hidden',
          }}>
          <div style={{ flexGrow: 0 }}>
            <Header />
          </div>
          <div
            style={{
              flexGrow: 1,
              overflow: 'auto',
            }}>
            {currentApp === 'Home' ? <Home /> : null}
            {currentApp === 'Resume' ? <Resume /> : null}
            {currentApp === 'Pokemon' ? <Pokemon /> : null}
            {currentApp === 'Covid' ? <Covid /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
