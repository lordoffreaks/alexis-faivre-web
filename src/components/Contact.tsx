import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Contact: React.FunctionComponent<{}> = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography variant="h1">CONTACT</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography component="p">CONTACT DETAILS 987 654 321</Typography>
        <Typography component="p">HELLO@ALEXIS-FAIVRE.COM</Typography>
        <Typography component="p">MORE CONTACT DETAILS</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography component="p">
          <TwitterIcon fontSize="large" color="primary">
            Twitter
          </TwitterIcon>
        </Typography>
        <Typography component="p">
          <LinkedInIcon fontSize="large" color="primary">
            LinkedIn
          </LinkedInIcon>
        </Typography>
        <Typography component="p">SOCIAL</Typography>
      </Grid>
    </Grid>
  )
}

export default Contact
