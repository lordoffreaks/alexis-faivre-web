import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

import { useStyles } from '../hooks/useStyles'
import NavMenu from '../components/NavMenu'

const Footer: React.FunctionComponent<{}> = () => {
  const classes = useStyles(undefined)

  return (
    <Grid container className={classes.footer}>
      <Grid item xs={12}>
        <Hidden mdDown>
          <NavMenu />
        </Hidden>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Typography component="p">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. AENEAN
            MOLESTIE MAURIS VELIT, IN ALIQUET NEQUE ELEMENTUM NEC. ETIAM SIT
            AMET MAURIS NON TELLUS LAOREET PORTTITOR. INTEGER QUIS PLACERAT
            ERAT, NEC FAUCIBUS DUI.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <h3>MADRID</h3>
          <Typography component="p">CONTACT DETAILS 987 654 321</Typography>
          <Typography component="p">HELLO@ALEXIS-FAIVRE.COM</Typography>
          <Typography component="p">MORE CONTACT DETAILS</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <h3>FOLLOW ME</h3>
          <Typography component="p">SOCIAL</Typography>
          <Typography component="p">SOCIAL</Typography>
          <Typography component="p">SOCIAL</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
