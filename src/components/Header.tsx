import React from 'react'
import { Link } from 'gatsby'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <div>
    <Link to="/">{title}</Link>
  </div>
)

export default Header
