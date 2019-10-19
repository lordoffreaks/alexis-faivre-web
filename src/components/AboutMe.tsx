import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { useStyles } from '../hooks/useStyles'

const AboutMe: React.FunctionComponent<{}> = () => {
  const classes = useStyles(undefined)

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography component="p">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. AENEAN
          MOLESTIE MAURIS VELIT, IN ALIQUET NEQUE ELEMENTUM NEC. ETIAM SIT AMET
          MAURIS NON TELLUS LAOREET PORTTITOR. INTEGER QUIS PLACERAT ERAT, NEC
          FAUCIBUS DUI.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography component="p">
          <Typography component="h3">NULLAM SED NUNC TELLUS</Typography>
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. AENEAN
          MOLESTIE MAURIS VELIT, IN ALIQUET NEQUE ELEMENTUM NEC. ETIAM SIT AMET
          MAURIS NON TELLUS LAOREET PORTTITOR. INTEGER QUIS PLACERAT ERAT, NEC
          FAUCIBUS DUI.
        </Typography>
        <Typography component="p">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. AENEAN
          MOLESTIE MAURIS VELIT, IN ALIQUET NEQUE ELEMENTUM NEC. ETIAM SIT AMET
          MAURIS NON TELLUS LAOREET PORTTITOR. INTEGER QUIS PLACERAT ERAT, NEC
          FAUCIBUS DUI.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AboutMe
