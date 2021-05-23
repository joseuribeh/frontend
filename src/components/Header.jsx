import React from 'react';
import '../styles/components/Header.styl'

const Header = ({ name, avatar, profession, children }) =>  {
  return (
    <header className='header__container'>
      <div className='header__content'>
        <figure className="photo__container">
          <img className='photo' src={avatar} alt='avatar' />
        </figure>
        <div className='header__info'>
          <h2 className='Header-title'>{profession}</h2>
          <h3 className='header__name'>{name}</h3>
        </div>
      </div>
      {children}
    </header>
  )
}

export default Header 