import React from 'react'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <a href='/'>Ash Blogs</a>
            <nav>
                <ul>
                    <li><a className='active'>Blogs</a></li>
                    <li><a>Log In</a></li>
                    <li><a>Register</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header