import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Contact: React.FunctionComponent<{}> = () => {
  return (
    <Grid container style={{ height: '100vh' }} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h1">CONTACT</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography component="p">PHONE: 987 654 321</Typography>
        <Typography component="p">HELLO@ALEXIS-FAIVRE.COM</Typography>
        <Typography component="p">MORE CONTACT DETAILS</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <TwitterIcon
          fontSize="large"
          color="primary"
          style={{ margin: '0.25em' }}
        >
          Twitter
        </TwitterIcon>

        <LinkedInIcon
          fontSize="large"
          color="primary"
          style={{ margin: '0.25em' }}
        >
          LinkedIn
        </LinkedInIcon>
      </Grid>
    </Grid>
  )
}

export default Contact
