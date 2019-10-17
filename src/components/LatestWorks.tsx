import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import VideoImage from './VideoImage'
import { FluidObject } from 'gatsby-image'

interface LatestWork {
  title: string
  url: string
  slug: string
  coverImage: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

interface OwnProps {
  items: Array<LatestWork>
}

type StateProps = {}

type DispatchProps = {}

type Props = OwnProps & StateProps & DispatchProps

const LatestWorks: React.FC<Props> = ({ items }) => {
  return (
    <>
      <h2>LATEST WORKS</h2>
      <Grid container spacing={3}>
        {items.map(({ slug, coverImage, url }) => {
          return (
            <Grid key={slug} item xs={12} sm={6}>
              <Typography component="div">
                <VideoImage coverImage={coverImage} url={url} />
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default LatestWorks
