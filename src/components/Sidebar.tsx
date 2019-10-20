import React from 'react'
import { useStyles } from '../hooks/useStyles'
import NavMenu from './NavMenu'

const Sidebar: React.FunctionComponent<{}> = () => {
  const classes = useStyles(undefined)

  return (
    <div className={classes.sidebar}>
      <NavMenu />
    </div>
  )
}

export default Sidebar
