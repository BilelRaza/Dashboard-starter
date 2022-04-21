import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        {/* logo */}
        <div className='logo'>
            <img src={Logo} alt="" />
            <span>
                M<span>o</span>bil F<span>oo</span>d
            </span>
        </div>
    </div>
  )
}

export default Sidebar