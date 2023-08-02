import React from 'react';

import homeCss from './Home.module.css'
import btnCss from './Button.module.css'
const Home = () => {
  return (
    <div className={homeCss.header}>
        <h1>Home component</h1>
        <button className={btnCss.loginBtn}type=''>Log in</button>
        <button className={btnCss.logoutBtn}type=''>Log out</button>
    </div>
  )
}

export default Home