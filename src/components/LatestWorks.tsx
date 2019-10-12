import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

interface LatestWork {
  thumbnail: {
    large: string
    medium: string
    small: string
  }
  title: string
  url: string
  slug: string
}

interface LatestWorksProps {
  items: Array<LatestWork>
}

const LatestWorks: React.FC<LatestWorksProps> = ({ items }) => {
  return (
    <>
      <h2>LATEST WORKS</h2>
      <Grid container spacing={3}>
        {items.map(item => {
          return (
            <Grid item xs={12} sm={6}>
              <Typography component="p">
                <img src={item.thumbnail.medium} alt={item.title} />
                <Link to={`/${item.slug}`}>{item.title}</Link>
              </Typography>
              )
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default LatestWorks
