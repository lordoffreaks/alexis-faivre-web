import React from 'react'
import logo from '../svg/logo-alexis.svg'
import { useStyles } from '../hooks/useStyles'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const classes = useStyles(undefined)
  return (
    <div className={classes.header}>
      <img src={logo} alt={title} />
    </div>
  )
}

export default Header
