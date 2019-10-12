import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import NavMenu from './NavMenu'

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <Grid container>
    <Hidden mdDown>
      <Grid item md={2}>
        <NavMenu />
      </Grid>
    </Hidden>
    <Grid item xs={12} md={10} className={className}>
      {children}
    </Grid>
  </Grid>
)

export default LayoutMain
