import React from 'react'
import Logged from './Logged'
import NotLogged from './NotLogged'

const main = ({isLoggedin}) => {
  return (
    <div>
        {isLoggedin ? < Logged />: < NotLogged />}
    </div>
  )
} 

export default main