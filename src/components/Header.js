import React from 'react'
import profile from '../../public/images/profile.png'

export const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
      }}>
      <img
        src={profile}
        alt='Logo'
        style={{
          maxHeight: '50px',
          borderRadius: '50%',
          border: '1px solid grey',
          marginRight: 10,
        }}
      />
      <div>Collin Betori</div>
    </div>
  )
}
