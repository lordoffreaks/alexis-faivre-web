import React from 'react'
import logo from '../svg/logo-alexis.svg'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <div style={{ textAlign: 'center' }}>
    <img src={logo} alt={title} />
  </div>
)

export default Header
