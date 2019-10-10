import * as React from 'react'
import Grid from '@material-ui/core/Grid'

interface LatestWorksProps {}

const LatestWorks: React.FC<LatestWorksProps> = ({}) => {
  return (
    <>
      <h2>LATEST WORKS</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <p>Uno</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Dos</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Uno</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Dos</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Uno</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Dos</p>
        </Grid>
      </Grid>
    </>
  )
}

export default LatestWorks
