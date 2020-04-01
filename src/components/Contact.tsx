import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Link from '@material-ui/core/Link'

const Contact: React.FunctionComponent<{}> = () => {
  return (
    <Grid container style={{ height: '100vh' }} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h1">CONTACT</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography component="p">ALEXISAXIS11@GMAIL.COM</Typography>
        <Typography component="p">JAIME@AXISAUDIOVISUALRESEARCH.COM</Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/alexis-faivre-75711730"
        >
          <LinkedInIcon
            fontSize="large"
            color="primary"
            style={{ margin: '0.25em' }}
          >
            LinkedIn
          </LinkedInIcon>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Contact
