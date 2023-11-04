import React from 'react'
import { Link} from 'react-router-dom'

function Header() {

  return (
    <div>
      <h1>Header</h1>
      <Link to='/login'><span>Login</span></Link>
      
    </div>
  )
}

export default Header
