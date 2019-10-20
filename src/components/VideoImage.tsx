import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import playIcon from '../svg/play.svg'
import { useStyles } from '../hooks/useStyles'

type Props = {
  coverImage: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  url: string
  title: string
}

const VideoImage: React.FunctionComponent<Props> = ({
  coverImage,
  url,
  title
}) => {
  const classes = useStyles(undefined)
  return (
    <>
      <div
        className={classes.videoImageContainer}
        onClick={e => console.log(e, url)}
      >
        <img className={classes.videoImageItem} src={playIcon} />
        <Img fluid={coverImage.childImageSharp.fluid} />
      </div>
      <Typography component="h3" className={classes.videoImageTitle}>
        {title}
      </Typography>
    </>
  )
}

export default VideoImage
